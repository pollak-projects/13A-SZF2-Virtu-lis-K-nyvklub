import { test, expect } from '@playwright/test';

test('mocked books API response', async ({ page }) => {
  await page.route('**/books/getAllBooks', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        {
          id: 999,
          title: 'Test Book',
          author: { name: 'Test Author' },
          coverArt: null
        }
      ])
    });
  });
  
  await page.route('**/auth/login', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        access_token: 'fake-token',
        refresh_token: 'fake-refresh',
        user_id: 123
      })
    });
  });
  
  await page.goto('/login');
  await page.locator('#username').fill('testuser');
  await page.locator('#password').fill('password');
  await page.getByRole('button', { name: 'Bejelentkezés' }).click();
  
  await page.waitForURL('**/books');
  
  await expect(page.getByText('Test Book')).toBeVisible();
  await expect(page.getByText('Test Author')).toBeVisible();
});
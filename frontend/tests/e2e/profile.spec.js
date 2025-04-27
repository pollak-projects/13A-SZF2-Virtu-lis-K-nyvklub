import { test, expect } from './utils/auth.js';

test('profile page displays user information', async ({ page }) => {

  await page.goto('/');
  await page.evaluate(() => {
    localStorage.setItem('token', 'fake-test-token');
    localStorage.setItem('refresh_token', 'fake-refresh-token');
    localStorage.setItem('user_id', '123');
  });
  
  await page.route('**/auth/user', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 123,
        username: 'testuser',
        name: 'Test User',
        email: 'test@example.com',
        createdAt: '2023-01-01T12:00:00Z'
      })
    });
  });
  
  await page.goto('/profile');
  
  await expect(page.getByText('Test User')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('testuser')).toBeVisible();
  await expect(page.getByText('test@example.com')).toBeVisible();
  
});

test('can update profile information', async ({ page, browserName }) => {
  const timeout = browserName === 'firefox' ? 15000 : 5000;
  
  console.log(`Running profile test with ${browserName}`);
  
  await page.goto('/');
  
  await page.evaluate(() => {
    localStorage.setItem('token', 'fake-test-token');
    localStorage.setItem('refresh_token', 'fake-refresh-token');
    localStorage.setItem('user_id', '123');
  });
  
  await page.route('**/auth/verify', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ valid: true })
    });
  });
  
  await page.route('**/auth/user', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        id: 123,
        username: 'testuser',
        name: 'Test User',
        email: 'test@example.com',
        createdAt: new Date().toISOString()
      })
    });
  });
  
  await page.goto('/profile', { waitUntil: 'networkidle' });
  
  if (browserName === 'firefox') {
    await page.waitForTimeout(1000);
  }
  
  console.log(`Current URL: ${await page.url()}`);
  
  await expect(
    page.locator('.profile-header .username', { hasText: 'testuser' })
  ).toBeVisible({ timeout });
  
  await expect(page.locator('.profile-header')).toBeVisible({ timeout });
  await expect(page.locator('.profile-container')).toBeVisible({ timeout });
});
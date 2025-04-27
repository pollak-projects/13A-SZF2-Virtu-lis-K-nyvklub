import { test, expect } from './utils/auth.js';

test('authenticated user can see the books page', async ({ authenticatedPage: page }) => {

  await expect(page).toHaveURL(/.*\/books$/);

  await expect(page.getByRole('heading', { level: 1, name: 'Könyvek' })).toBeVisible({ timeout: 10000 });

  await expect(page.locator('.home-card')).toBeVisible({ timeout: 10000 });
  
  await expect(page.locator('.gradient-background')).toBeVisible();
  
  await expect(page.locator('.content-holder')).toBeVisible({ timeout: 10000 });
});
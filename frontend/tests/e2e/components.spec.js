import { test, expect } from './utils/auth.js';

test('GradientBackground renders correctly in Books page', async ({ authenticatedPage: page }) => {
    
  await expect(page.locator('.gradient-background')).toBeVisible();
  
  await expect(page.locator('.home-card')).toBeVisible({ timeout: 10000 });
  
  await expect(page.getByRole('heading', { name: 'Könyvek' })).toBeVisible();
});
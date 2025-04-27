import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    console.log('Setting up authenticated page');
    
    await page.goto('/');
    console.log('Initial page loaded');
    
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
          email: 'test@example.com'
        })
      });
    });
    
    await page.route('**/books/getAllBooks', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            id: 1, 
            title: 'Test Book', 
            author: { 
              id: 1,
              name: 'Test Author' 
            }, 
            coverArt: '/uploads/book/test-cover.jpg',
            releaseYear: 2023
          }
        ])
      });
    });
    
    await page.evaluate(() => {
      localStorage.setItem('token', 'fake-test-token');
      localStorage.setItem('refresh_token', 'fake-refresh-token');
      localStorage.setItem('user_id', '123');
    });
    
    console.log('Navigating to books page');
    await page.goto('/books');
    
    await page.waitForTimeout(1000);
    
    await use(page);
  },
});

export { expect };
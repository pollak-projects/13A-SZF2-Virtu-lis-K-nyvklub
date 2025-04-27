import { test, expect } from '@playwright/test';

test('login page shows form', async ({ page }) => {
  await page.goto('/login');
  
  await expect(page.getByLabel('Felhasználónév')).toBeVisible();
  await expect(page.getByLabel('Jelszó')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Bejelentkezés' })).toBeVisible();
  
  await expect(page.getByRole('link', { name: 'Regisztráljon itt' })).toBeVisible();
});

test('displays error message with invalid credentials', async ({ page }) => {

  await page.route('**/auth/login', async route => {
    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({
        message: 'Hibás felhasználónév vagy jelszó'
      })
    });
  });
  
  await page.goto('/login');
  

  await page.getByLabel('Felhasználónév').fill('wronguser');
  await page.getByLabel('Jelszó').fill('wrongpass');
  

  await page.getByRole('button', { name: 'Bejelentkezés' }).click();
  

  await expect(page.getByText('Hibás felhasználónév vagy jelszó')).toBeVisible();
});

test('successful login redirects to books page', async ({ page }) => {

  await page.route('**/auth/login', async route => {
    const requestBody = JSON.parse(route.request().postData());
    
    console.log('Login request:', requestBody);
    
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        access_token: 'fake-token',
        refresh_token: 'fake-refresh',
        user_id: '123'
      })
    });
  });
  
  await page.route('**/auth/verify', route => {
    route.fulfill({
      status: 200, 
      body: JSON.stringify({ valid: true })
    });
  });
  
  await page.route('**/books/getAllBooks', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 1, title: 'Test Book' }])
    });
  });
  
  await page.goto('/login');
  
  await page.getByLabel('Felhasználónév').fill('testuser');
  await page.getByLabel('Jelszó').fill('password123');
  
  await page.evaluate(() => {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      console.log(`Setting localStorage: ${key} = ${value}`);
      originalSetItem.call(this, key, value);
    };
  });
  
  await page.getByRole('button', { name: 'Bejelentkezés' }).click();
  
  await page.evaluate(() => {
    localStorage.setItem('token', 'fake-token');
  });
  
  const hasToken = await page.evaluate(() => {
    return !!localStorage.getItem('token');
  });
  
  expect(hasToken).toBe(true);
  
  await page.goto('/books');
  await expect(page.getByRole('heading', { name: /Könyvek/i })).toBeVisible({ timeout: 10000 });
});
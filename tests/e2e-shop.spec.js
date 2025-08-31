const { test, expect } = require('@playwright/test');

test('Login and purchase iPhone X', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  
  // Get credentials from the page (they are usually shown in the UI)
  const username = 'rahulshettyacademy';
  const password = 'learning';

  // Fill in login credentials
  await page.fill('#username', username);
  await page.fill('#password', password);
  
  // Click sign in button
  await page.click('#signInBtn');

  // Wait for navigation to complete and products to be visible
  await page.waitForSelector('.card-title');

  // Find and click Add to Cart button for iPhoneX
  const products = await page.locator('.card-title').allTextContents();
  const iphoneIndex = products.findIndex(product => product.includes('iphone'));
  
  // Get all add to cart buttons and click the one corresponding to iPhone
  const addButtons = await page.$$('.card-footer button');
  await addButtons[iphoneIndex].click();

  // Click on Checkout button
  await page.click('a.nav-link.btn.btn-primary');

  // Verify the product is in the cart
  const cartProducts = await page.locator('h4.media-heading a').allTextContents();
  await expect(cartProducts).toContain('iphone X');

  // Additional verification of checkout page
  await expect(page.locator('.btn-success')).toBeVisible();
  
  console.log('Test completed successfully: iPhone X was added to cart and verified');
});
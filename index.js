//Define test product item
const productname = "Hydrator Jumbo Set";
const prodID = "PROD122890";
const skuID = "SKU179495";

const { chromium } = require('playwright');
const { applyDiscountAndCheck } = require('./cartscript');

// Get today's date and format it as YYYY-MM-DD
const today = new Date();
const formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD

(async () => {
  const browser = await chromium.launch({ headless: false }); // Set headless: false for testing purpose
  const page = await browser.newPage();
  
    // Open clinique website
    await page.goto('https://www.clinique.com.hk/');
    
    
// Click for the jumbo set and add to cart
    console.log(`//The test of ${productname} //`);
    await page.getByText('Hydrator Jumbo Set').click();
    await page.waitForTimeout(5000); // Wait for 5 seconds
    await page.click('//*[@id="content"]/div/div/div/div/div/div[1]/div[2]/div/div[2]/div[6]/div/div/div/button');
    await page.waitForTimeout(5000); // Wait for 5 seconds
    
    // Check if the cart overlay is visible
  const cartOverlay = await page.$('.header-gnav-cart__overlay.visible');
  if (cartOverlay) {
    console.log('Cart overlay is visible.');

    // Check the quantity of the product
    const quantity = await page.$eval(`.prod-${prodID}${skuID} .qty`, el => el.textContent.trim());
    if (quantity === '1') {
      console.log(`The quantity of ${productname} is 1.`);

      // Take a screenshot of the page
      await page.screenshot({ path: `cart_overlay_${formattedDate}.png` });
      console.log(`Screenshot taken.\n`);
      await page.click('//*[@id="node-260264"]/div/div/div/div[2]/div[2]/div/div/span/div[3]/div[3]/a');
    } else {
      console.log(`The quantity of ${productname} is not 1.\n`);
    }
  } else {
    console.log('Cart overlay is not visible.\n');
  }

  // Apply discount and check
  await applyDiscountAndCheck(page,formattedDate);
  
  // Close browser
  await browser.close();
})();

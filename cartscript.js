//Define the variables in the test item
const couponCode = "VIPMS";
const discountRate = "33.2%";
const netPrice = "HK$815";

async function applyDiscountAndCheck(page, formattedDate) {
    // Step 1: Input Discount Code
    await page.fill('//*[@id="form--offer_code--field--OFFER_CODE"]', couponCode);
    await page.waitForTimeout(5000); // Wait for 5 seconds

    // Step 2: Click Enter
    await page.click('//*[@id="offer_code"]/fieldset/div[2]/input');
    await page.waitForTimeout(5000); // Wait for 5 seconds

    // Step 3: Check cart discount
    const discountText = await page.textContent('//*[@id="viewcart-panel"]/div[2]/div/div[2]/div[3]');
    console.log(`===Applied discount rate is ${discountRate} ===`);
    if (discountText.includes(discountRate)) {
        console.log(`Discount applied correctly.\n`);
    } else {
        console.log(`Discount not applied correctly.\n`);
    }

    // Step 4: Check the total price of the cart
    const totalPrice = await page.textContent('//*[@id="order-summary-panel"]/div/div/div[8]');
    console.log(`===Applied net price is ${netPrice} ===`);
    if (totalPrice.trim() === netPrice) {
        console.log('Total price is correct.');
       // Take a screenshot with today's date as the file name
        await page.screenshot({ path: `cart_screenshot_${formattedDate}.png` });
        console.log(`Cart screenshot taken. \n`);
    } else {
        console.log('Total price is incorrect.');
    }
}

module.exports = { applyDiscountAndCheck };
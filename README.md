# Project Name
Playwright Cart Testing Demo

## Project Objectives
To automate testing shopping cart and screenshot the overlay shopping cart and shopping cart status. This operation is repetitive and time-consuming in weekly e-commerce site update operation workflow.
This small test automation aims to streamline procedures to validate the discount pricing and net pricing of visual set. Also, the screenshots are ready to pass to brand representative after the test.

## Variables needs to change before test
1. Product name
2. prodID
3. skuID
4. discount rate
5. net price

## Steps to initiate the testing file
1. Install dependencies: npm install
2. Open VS Code Terminal
3. Type node index.js

## Test case
### TC001 Login to the website
Open the browser and navigate to the website

### TC002 Add product to cart
1. Search for "Moisture Surge™ 100H Auto-Replenishing Hydrator Jumbo Set"
2. Click on the product and add it to the cart
Expected Result: Product successfully added to the cart

### TC003	Check cart overlay
1. Click the cart icon
2. Check if the cart overlay is visible
Expected Result: < br / >
Cart overlay is visible, screenshot captured

### TC004 Check product quantity
Check the quantity of "Moisture Surge™ 100H Auto-Replenishing Hydrator Jumbo Set" in the cart<br/>
Expected result: Product quantity is 1	

### TC005 Check discount and price
1. Enter discount code "VIPMS"
2. Click the apply button
3. Check the discount and total price
Expected Result:< br / >
Discount is (33.2%) HK$815< br / >
Total price is HK$815< br / >
cart discount screenshot captured

## Note
The actual test plan of site update could be more complex, involving multiple product categories, promotional tiers, membership giftings and test case dependency. 
For demo purpose, this test only contains 1 virtual set.< br / >
Item url: https://www.clinique.com.hk/product/1685/122890/skin-care/gifts-sets/moisture-surgetm-100h-auto-replenishing-hydrator-jumbo-set

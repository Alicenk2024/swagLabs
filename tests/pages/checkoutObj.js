import {expect} from '@playwright/test'

export class Checkout {
    
    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('#user-name');
        this.password_textbox = page.locator('#password');
        this.login_btn = page.locator('[data-test="login-button"]');
                
        this.bike_light_item = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.basket = page.locator('[data-test="shopping-cart-link"]');
        this.checkout_btn = page.locator('[data-test="checkout"]');
        this.first_name = page.locator('#first-name');
        this.last_name = page.locator('#last-name');
        this.postcode = page.locator('[data-test="postalCode"]');
        this.continue_btn = page.locator('#continue');
        this.finish_btn = page.locator('[data-test="finish"]')      
    }

    async navigateToUrl() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    
    async loginSuccessAndAssertUrl() {
        await this.username_textbox.fill('standard_user');
        await this.password_textbox.fill('secret_sauce');
        await this.login_btn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }

    async addBikeLightToBasketAndAssertBasket() {
        await this.bike_light_item.click();
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(1);
    }
    
    async verifyBasketAndAssertUrl() {
        await this.basket.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
    }
    
    async goToCheckoutStep1AndAssertUrl() {
        await this.checkout_btn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    }
    
    async fillDetailsForCheckoutStep1() {
        await this.first_name.fill('John');
        await this.last_name.fill('Doe');
        await this.postcode.fill('NW4 3SN');
    }
    
    async goToCheckoutStep2AndAssertUrl() {
        await this.continue_btn.click()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    }
    
    async clickOnFinishBtnAndAssertUrlAndOrderConfirmationText() {
        await this.finish_btn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
        await expect(await this.page.locator('text=Thank you for your order!').isVisible()).toBeTruthy();
        await expect(await this.page.locator('text=Checkout: Complete!').isVisible()).toBeTruthy();        
    }  
    
}


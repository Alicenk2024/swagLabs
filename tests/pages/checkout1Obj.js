import {expect} from '@playwright/test'

export class Checkout1 {
    
    constructor(page) {
        this.page = page;              
        this.first_name = page.locator('#first-name');
        this.last_name = page.locator('#last-name');
        this.postcode = page.locator('[data-test="postalCode"]');
        this.continue_btn = page.locator('#continue');   
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
    
}


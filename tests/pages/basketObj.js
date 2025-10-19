import {expect} from '@playwright/test'

export class Basket {
    
    constructor(page) {
        this.page = page;              
        this.checkout_btn = page.locator('[data-test="checkout"]');  
    }
      
    async goToCheckoutStep1AndAssertUrl() {
        await this.checkout_btn.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
    }

}

import {expect} from '@playwright/test'

export class Checkout2 {
    
    constructor(page) {
        this.page = page;              
        this.finish_btn = page.locator('[data-test="finish"]')      
    }
    
    async goToOrderConfirmationAndAssertUrl() {
        await this.finish_btn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    }
    
    async clickOnFinishBtnAndAssertUrlAndOrderConfirmationText() {        
        await expect(await this.page.locator('text=Thank you for your order!').isVisible()).toBeTruthy();
        await expect(await this.page.locator('text=Checkout: Complete!').isVisible()).toBeTruthy();        
    }  
    
}


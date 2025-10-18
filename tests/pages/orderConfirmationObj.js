import {expect} from '@playwright/test'

export class OrderConfirmation {
    
    constructor(page) {
        this.page = page;                  
    }
    
    async AssertOrderConfirmationText() {        
        expect(await this.page.locator('text=Thank you for your order!').isVisible()).toBeTruthy();
        expect(await this.page.locator('text=Checkout: Complete!').isVisible()).toBeTruthy();        
    }  
    
}


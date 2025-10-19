import {expect} from '@playwright/test'

export class Checkout2 {
    
    constructor(page) {
        this.page = page;              
        this.itemTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.total = page.locator('[data-test="total-label"]');
        this.finish_btn = page.locator('[data-test="finish"]');
    }
    
    async assertTotalsWithMultiplier(multiplier) {
        const money  = t => Number((t ?? '').replace(/[^0-9.]/g, ''));
        const toCents = (x) => Math.round((x + Number.EPSILON) * 100);

        const item = money(await this.itemTotal.textContent()); // e.g., 15.99
        const tax  = money(await this.tax.textContent());       // e.g., 1.28
        const tot  = money(await this.total.textContent());     // e.g., 17.27

        // Expected amounts in cents
        const itemCents          = toCents(item);
        const expectedTotalCents = Math.round(itemCents * multiplier); // cents → multiply → round integer
        const expectedTaxCents   = expectedTotalCents - itemCents; // tax = total - item (both at cents)

        // Compare in cents (exact integers), then you're immune to FP noise
        expect(toCents(tax)).toBe(expectedTaxCents);
        expect(toCents(tot)).toBe(expectedTotalCents);
}
    
    async goToOrderConfirmationAndAssertUrl() {
        await this.finish_btn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    }
    
    async AssertUrlAndOrderConfirmationText() {        
        expect(await this.page.locator('text=Thank you for your order!').isVisible()).toBeTruthy();
        expect(await this.page.locator('text=Checkout: Complete!').isVisible()).toBeTruthy();        
    }  
    
}

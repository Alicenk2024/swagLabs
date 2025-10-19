import {expect} from '@playwright/test'

export class Product {
    
    constructor(page) {
        this.page = page;            
        this.sortSelect = page.locator('[data-test="product-sort-container"]');
        this.bike_light_item = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.shopping_cart_badge = page.locator('[data-test="shopping-cart-badge"]')
        this.basket = page.locator('[data-test="shopping-cart-link"]');   
    }
    
    async sortProductsLowtoHighPrice() {
        await this.sortSelect.selectOption({ label: 'Price (low to high)' });
        await this.page.waitForTimeout(1000);
        await expect(this.sortSelect).toHaveValue('lohi');   
    }
    
    // This locator was more difficult so didn't define in the constructor for ONLY this Function!!
    async addProductToBasket(productName) {
        await this.page.locator('.inventory_item')
                       .filter({hasText: `${productName}`})
                       .getByRole('button', {name: 'Add to cart'}).click();
        await expect(this.shopping_cart_badge).toHaveText('1');
    }
    
    async goToBasketPageAndAssertUrl() {
        await this.basket.click();
        await this.page.waitForTimeout(1000);
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
        
    }

}
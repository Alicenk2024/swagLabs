import {expect} from '@playwright/test'

export class Login {
    
    constructor(page) {
        this.page = page;
        this.username_textbox = page.locator('#user-name');
        this.password_textbox = page.locator('#password');
        this.login_btn = page.locator('[data-test="login-button"]');
        this.error = page.locator('[data-test="error"]');
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
    
        async loginFailureAndAssertUrl() {
        await this.username_textbox.fill('never_used');
        await this.password_textbox.fill('hey781');
        await this.login_btn.click();
        await expect(this.error).toBeVisible();
    }
    
}
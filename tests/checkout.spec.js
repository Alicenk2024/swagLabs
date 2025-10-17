import {test, expect} from '@playwright/test'
import { Checkout } from './pages/checkoutObj';

// If we use the "Fixtures" method, then we would NOT need to use line 1-2
// Instead we would use the following imports on line 5 & 6
// import {test} from './fixtures/fixtures.js'
// import {expect} from '@playwright/test'
// I will update the code to use this fixtures method later :(

test('swaglabsCheckout', async({page}) => {
    const checkout = new Checkout(page);
    await checkout.navigateToUrl();
    await checkout.loginSuccessAndAssertUrl();
    await checkout.addBikeLightToBasketAndAssertBasket();
    await checkout.verifyBasketAndAssertUrl();
    await checkout.goToCheckoutStep1AndAssertUrl();
    await checkout.fillDetailsForCheckoutStep1();
    await checkout.goToCheckoutStep2AndAssertUrl();
    await checkout.clickOnFinishBtnAndAssertUrlAndOrderConfirmationText();
})
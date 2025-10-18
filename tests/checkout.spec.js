import {expect} from '@playwright/test'
import {test} from './fixtures/fixtures.js';

test('complete checkout flow', async ({login, product, basket, checkout1, checkout2, orderConfirmation}) => {
  await login.navigateToUrl();
  await login.loginFailureAndAssertUrl();
  await login.loginSuccessAndAssertUrl();

  await product.sortProductsLowtoHighPrice();
  await product.addBikeLightToBasketAndAssertBasket();
  await product.goToBasketPageAndAssertUrl();

  await basket.goToCheckoutStep1AndAssertUrl();

  await checkout1.fillDetailsForCheckoutStep1();
  await checkout1.goToCheckoutStep2AndAssertUrl();

  await checkout2.goToOrderConfirmationAndAssertUrl();
  await orderConfirmation.AssertOrderConfirmationText();
});
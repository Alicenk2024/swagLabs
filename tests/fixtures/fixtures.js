import { test as base} from '@playwright/test';

// POMs (PascalCase class names, keep .js since you're ESM)
import { Login } from '../pages/loginObj.js';
import { Basket } from '../pages/basketObj.js';
import { Product } from '../pages/productObj.js';
import { Checkout1 } from '../pages/checkout1Obj.js';
import { Checkout2 } from '../pages/checkout2Obj.js';
import { OrderConfirmation } from '../pages/orderConfirmationObj.js';

// Expose POMs as fixtures
export const test = base.extend({
  login: async ({ page }, use) => { await use(new Login(page)); },
  product: async ({ page }, use) => { await use(new Product(page)); },
  basket: async ({ page }, use) => { await use(new Basket(page)); },
  checkout1: async ({ page }, use) => { await use(new Checkout1(page)); },
  checkout2: async ({ page }, use) => { await use(new Checkout2(page)); },
  orderConfirmation: async ({ page }, use) => { await use(new OrderConfirmation(page)); },
});
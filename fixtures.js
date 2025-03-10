import { test as base } from '@playwright/test';
import HomePage from './pom/pages/HomePage';
import SigninPage from './pom/pages/SigninPage';

export const test = base.extend({
    /** @type { SigninPage } */
    signinPage: async ({ page }, use) => {
        await use(new SigninPage(page));
    },
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});


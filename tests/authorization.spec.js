import { expect } from '@playwright/test';
import { test } from '../fixtures';

test('Verify user login', async ({ page, homePage, signinPage }) => {
    await signinPage.navigate();
    const signinPageTitle = await signinPage.getTitle();

    //verify that the Login page title is correct
    expect(signinPageTitle).toBe('TopCashback.com: Highest Cash Back Guaranteed');

    await signinPage.clickLoginLink();
    await signinPage.fillEmailField();
    await signinPage.fillPasswordField();
    await signinPage.clickLoginButton();

    await page.waitForTimeout(3000);
    const homePageTitle = await homePage.getTitle();

    //verify that the Home page title is correct
    expect(homePageTitle).toBe("TopCashback Official Site - The USA's Most Generous Cash Back Site.");
});


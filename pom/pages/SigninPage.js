export default class SigninPage {
    constructor(page) {
        this.page = page;

        this.loginLink = page.getByRole('link', { name: 'Log in >' });
        this.emailField = page.getByLabel('Email');
        this.passwordField = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' })
    }

    async navigate() {
        await this.page.goto('https://www.topcashback.com');
    }

    async getTitle() {
        return await this.page.title();
    }

    async clickLoginLink() {
        await this.loginLink.click();
    };

    async fillEmailField() {
        await this.emailField.fill('elena@gmail.com');
    };

    async fillPasswordField() {
        await this.passwordField.fill('Tester123!');
    };

    async clickLoginButton() {
        await this.loginButton.click();
    }
    }



// import { test, expect } from '@playwright/test';
// import { Login } from '../../UI/pages/login.page';
// //import { LoginPage } from '../pages/login.page';
// import { HomePage } from '../../UI/pages/home.page';
// import { CreateUser } from '../../UI/pages/user.page';
// import { loginData1 } from '../../test-data/UI/login.data';

// test.describe('User register, login and delete to GAD', () => {
//   let userCreate: CreateUser;
//   let loginPage: Login;
//   let homePage: HomePage;
//   test.beforeEach(async ({ page }) => {
//     userCreate = new CreateUser();
//     await userCreate.navigate(page);
//   });

//   test(
//     'successful register and login with correct credentials',
//     { tag: ['@login', '@smoke'] },
//     async ({ page }) => {
//       // Arrange
//       loginPage = new Login();
//       // const userId = loginData.userId;
//       // const userPassword = loginData.userPassword;
//       // const expectedUserName = 'Jan Demobankowy';

//       // Act
//       await userCreate.register(page: Page, firstName: string, lastName: string, email: string, password: string);
//       //await loginPage.login(userId, userPassword);
//       await loginPage.login(page, email, password);

//       // Assert
//       //await expect(loginPage.userName).toHaveText(expectedUserName);
//     },
//   );
//   // import { test, expect } from '@playwright/test';
//   // import { Login } from '../../UI/pages/login.page';
//   // import { HomePage } from '../../UI/pages/home.page';
//   // import { CreateUser } from '../../UI/pages/user.page';
//   // // import {
//   // //   firstName1,
//   // //   lastName1,
//   // //   email1,
//   // //   password1,
//   // //   firstName2,
//   // //   lastName2,
//   // //   email2,
//   // //   password2,
//   // //   firstName3,
//   // //   lastName3,
//   // //   email3,
//   // //   password3,
//   // // } from '../../test-data/UI/login.data';
//   // import { loginData1 } from '../../test-data/UI/login.data';

//   // test.describe('Testing creating new user POP', () => {
//   //   let loginPage: Login;
//   //   let homePage: HomePage;
//   //   let userCreate: CreateUser;

//   //   test.beforeEach(async ({ page }) => {
//   //     loginPage = new Login();
//   //     homePage = new HomePage();
//   //     userCreate = new CreateUser();
//   //     await userCreate.navigate(page);
//   //   });

//   //   test('Test1: should register, login, logout and delete user1', async ({
//   //     page,
//   //   }) => {
//   //     // Arrange
//   //     // const firstName = firstName1;
//   //     // const lastName = lastName1;
//   //     // const email = email1;
//   //     // const password = password1;
//   //     const firstName = loginData1.firstName1;
//   //     const lastName = loginData1.lastName1;
//   //     const email = loginData1.email1;
//   //     const password = loginData1.password1;

//   //     // Act
//   //     await userCreate.register(page, firstName, lastName, email, password);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //     await homePage.logout(page);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //   });

//   //   test('Test2: should register, login, logout and delete user2', async ({
//   //     page,
//   //   }) => {
//   //     // Arrange
//   //     const firstName = firstName2;
//   //     const lastName = lastName2;
//   //     const email = email2;
//   //     const password = password2;

//   //     // Act
//   //     await userCreate.register(page, firstName, lastName, email, password);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //     await homePage.logout(page);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //   });

//   //   test('Test3: should register, login, logout and delete user3', async ({
//   //     page,
//   //   }) => {
//   //     // Arrange
//   //     const firstName = firstName3;
//   //     const lastName = lastName3;
//   //     const email = email3;
//   //     const password = password3;

//   //     // Act
//   //     await userCreate.register(page, firstName, lastName, email, password);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //     await homePage.logout(page);
//   //     await loginPage.navigate(page);
//   //     await loginPage.login(page, email, password);
//   //   });

//   test.afterEach(async ({ page }) => {
//     //await homePage.navigate(page);
//     homePage = new HomePage();
//     await homePage.deleteUser(page);
//   });
// });

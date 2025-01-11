## Test Case / e2e / UI

### Test Case ID: TC-001

**Title:** User Registration, Login, and Deletion Test

**Objective:**  
To verify that a new user can register, log in, and delete their account successfully.

**Preconditions:**

- User has access to the registration page.
- The application is up and running.
- No user with the same email address already exists.

**Test Steps:**

1. Navigate to the registration page.
2. Fill in the "First Name" with `John`.
3. Fill in the "Last Name" with `Doe`.
4. Fill in the "Email" with `john.doe@example.com`.
5. Fill in the "Password" with `password123`.
6. Click the "Register" button.
7. Navigate to the login page.
8. Fill in the "Email" with `john.doe@example.com`.
9. Fill in the "Password" with `password123`.
10. Click the "Keep me signed in" checkbox.
11. Click the "LogIn" button.
12. Click the "Delete Account" button.
13. Handle the account deletion confirmation dialog.

**Expected Result:**  
User is successfully registered, logged in, and the account is deleted without any errors.

**Actual Result:**  
[Description of the actual result observed during testing]

**Status:**  
[Pass/Fail]

**Notes:**

- Ensure that the dialog handling for account deletion is uncommented and implemented correctly.

---

### Test Case ID: TC-002

**Title:** Unsuccessful Registration with Invalid Email

**Objective:**  
To verify that registration fails with an invalid email address.

**Preconditions:**

- User has access to the registration page.
- The application is up and running.
- No user with the same email address already exists.

**Test Steps:**

1. Navigate to the registration page.
2. Fill in the "First Name" with `Jane`.
3. Fill in the "Last Name" with `Smith`.
4. Fill in the "Email" with `jane.smith@example`.
5. Fill in the "Password" with `password123`.
6. Click the "Register" button.

**Expected Result:**  
User receives an error message: "Please provide a valid email address."

**Actual Result:**  
[Description of the actual result observed during testing]

**Status:**  
[Pass/Fail]

**Notes:**

- Ensure the email validation is implemented correctly.

---

### Test Case ID: TC-003

**Title:** Unsuccessful Login with Invalid Email but Successful Registration and Deletion

**Objective:**  
To verify that login fails with an invalid email but allows registration and deletion successfully.

**Preconditions:**

- User has access to the registration page.
- The application is up and running.
- No user with the same email address already exists.

**Test Steps:**

1. Navigate to the registration page.
2. Fill in the "First Name" with `Jane`.
3. Fill in the "Last Name" with `Smith`.
4. Fill in the "Email" with `jane.smith@example.com`.
5. Fill in the "Password" with `password123`.
6. Click the "Register" button.
7. Navigate to the login page.
8. Fill in the "Email" with `jane.smith@example`.
9. Fill in the "Password" with `password123`.
10. Click the "LogIn" button.
11. Verify the error message "Invalid username or password" is displayed.
12. Fill in the "Email" with `jane.smith@example.com`.
13. Fill in the "Password" with `password123`.
14. Click the "LogIn" button.
15. Verify the login is successful.
16. Click the "Delete Account" button.
17. Handle the account deletion confirmation dialog.

**Expected Result:**  
Login fails with an invalid email, but registration and deletion are successful.

**Actual Result:**  
[Description of the actual result observed during testing]

**Status:**  
[Pass/Fail]

**Notes:**

- Ensure proper handling of invalid email during login.

---

### Test Case ID: TC-004

**Title:** Unsuccessful Login with Invalid Password but Successful Registration and Deletion

**Objective:**  
To verify that login fails with an invalid password but allows registration and deletion successfully.

**Preconditions:**

- User has access to the registration page.
- The application is up and running.
- No user with the same email address already exists.

**Test Steps:**

1. Navigate to the registration page.
2. Fill in the "First Name" with `Alice`.
3. Fill in the "Last Name" with `Johnson`.
4. Fill in the "Email" with `alice.johnson@example.com`.
5. Fill in the "Password" with `password123`.
6. Click the "Register" button.
7. Navigate to the login page.
8. Fill in the "Email" with `alice.johnson@example.com`.
9. Fill in the "Password" with `InvalidPass123$`.
10. Click the "LogIn" button.
11. Verify the error message "Invalid username or password" is displayed.
12. Fill in the "Email" with `alice.johnson@example.com`.
13. Fill in the "Password" with `password123`.
14. Click the "LogIn" button.
15. Verify the login is successful.
16. Click the "Delete Account" button.
17. Handle the account deletion confirmation dialog.

**Expected Result:**  
Login fails with an invalid password, but registration and deletion are successful.

**Actual Result:**  
[Description of the actual result observed during testing]

**Status:**  
[Pass/Fail]

**Notes:**

- Ensure proper handling of invalid password during login.

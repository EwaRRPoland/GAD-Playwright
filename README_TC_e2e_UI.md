# Test Case / e2e / UI

## Test Case ID: TC-001

**Title:** User Registration, Login, and Deletion Test

**Objective:**  
To verify that a new user can register, log in, and delete their account successfully.

**Preconditions:**

- User has access to the registration page.
- The application is up and running.
- No user with the same email address already exists.

**Test Steps:**

1. Navigate to the registration page.
2. Fill in the "First Name" with `Xxxxxaab`.
3. Fill in the "Last Name" with `Yyyxxaab`.
4. Fill in the "Email" with `baaabcd@ab.ab`.
5. Fill in the "Password" with `123$123`.
6. Click the "Register" button.
7. Navigate to the login page.
8. Fill in the "Email" with `baaabcd@ab.ab`.
9. Fill in the "Password" with `123$123`.
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

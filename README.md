# Lab 8 - Starter

## 1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- [ ] Within a Github action that runs whenever code is pushed

- [x] Manually run them locally before pushing code 
    <br>
    Running tests when the code is pushed means you will potentially push code that has errors or does not pass the tests and running after all development is completed means that any errors you may have had were not fixed, and if these errors happened early on in development, then you could have more issues that built on the first one because it wasn't caught. Running the tests locally before pushing code ensures that all the code that is pushed and shared with others passes the tests and prevents having to rewrite code or even start over due to uncaught errors.

- [ ] Run them all after all development is completed

## 2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

   No. (End-to-end test is used to test across multiple and applications/user group, not just functional tests to test a piece of code).

## 3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   No, because unit tests involve testing individual parts of your code to make sure each part is functioning correctly. The message feature for users to write and send a message to other users could include many smaller parts such as writing the message, checking the message length, sending the message, connecting to the receiving user, etc. The functionality of any of those smaller individual parts would affect the overall "message" feature and are not independent of each other, so it would be better to make unit tests for each smaller part.

## 4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

   Yes, finding the max message length is one individual part of the code and the one simple action you are performing is checking that the length of a message is less than 80. This encapuslated unit is used to stop the user from typing over 80 characters and it would be important to test that it is functioning correctly so that we know whether the user is typing too many characters and we can respond accordingly. Using a unit test to test "max message length" is debugging on a small scale that contributes to a larger part of the program.


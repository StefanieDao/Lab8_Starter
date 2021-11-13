// unit.test.js

const { func } = require('joi');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor

// isPhoneNumber
test('Check (858) 184-2459) is a phone number', () => { 
    expect(functions.isPhoneNumber('(858) 184-2459)')).toBe(true);
});
test('check (000) 000-0000 is a phone number', () => {
    expect(functions.isPhoneNumber('(000) 000-0000')).toBe(true);
});
test('check 598 276 1092 is not a phone number', () => {
    expect(functions.isPhoneNumber('598 276 1092')).toBe(false);
});
test('check 7 is not a phone number', () => {
    expect(functions.isPhoneNumber('7')).toBe(false);
});

// isEmail
test('Check team@gmail.com is an email', () => {
    expect(functions.isEmail('team@gmail.com')).toBe(true);
});
test('check a@yaho_o.com is an email', () => {
    expect(functions.isEmail('a@yaho_o.com')).toBe(true);
});
test('check importpandas is not an email', () => {
    expect(functions.isEmail('importpandas')).toBe(false);
});
test('check 2team9@sh.n is not an email', () => {
    expect(functions.isEmail('2team9@sh.n')).toBe(false);
});


// isStrongPassword
test('check abcd is a strong password', () => {
    expect(functions.isStrongPassword('abcd')).toBe(true);
});
test('check ADf_hjs23801 is a strong password', () => {
    expect(functions.isStrongPassword('ADf_hjs23801')).toBe(true);
    
});
test('check abc is not a strong password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});
test('check 12asdas is a strong password', () => {
    expect(functions.isStrongPassword('12asdas')).toBe(false);
});


// isDate
test('check 12/14/2021 is a date', () => {
    expect(functions.isDate('12/14/2020')).toBe(true);
});
test('check 1/4/2021 is a date', () => {
    expect(functions.isDate('1/4/2021')).toBe(true);
});
test('check hello is not a date', () => {
    expect(functions.isDate('hello')).toBe(false);
});
test('check 10/8 is not a date', () => {
    expect(functions.isDate('10/8')).toBe(false);   
});


// isHexColor
test('check #b3c8ea is a hex color', () => {
    expect(functions.isHexColor('#b3c8ea')).toBe(true);
});
test('check 00ff23 is a hex color', () => {
    expect(functions.isHexColor('00ff23')).toBe(true);
});
test('check #Z68FE is not a hex color', () => {
    expect(functions.isHexColor('#Z68FE')).toBe(false);
});
test('check abcdefg is not a hex color', () => {
    expect(functions.isHexColor('abcdefg')).toBe(false);
});
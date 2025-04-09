import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import assert from "node:assert";

Given('the arrived feature flag is off', function () {
    // Write code here that turns the phrase above into concrete actions
});

When('I check the home page', function () {
    cy.visit("/")
});

Then('I see that the App Router is running', function () {
    cy.contains('h1', 'App Router');
});


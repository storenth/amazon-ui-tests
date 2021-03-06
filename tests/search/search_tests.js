import {expect} from 'chai';

Feature('Search functionality');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Search function is displayed', (I, homePage) => {
    I.seeElement(homePage.searchTextbox);
    I.seeElement(homePage.searchButton);
});

Scenario('Search returns results', async (I, homePage, resultPage) => {
    const searchString = 'echo';
    homePage.search(searchString);
    I.seeElement(resultPage.resultBar);
    expect(await resultPage.hasResults(searchString)).to.be.true;
});

Scenario('Search returns no results', async (I, homePage, resultPage) => {
    const searchString = 'echdjhkfefweho';
    homePage.search(searchString);
    I.seeElement(resultPage.noResult);
});
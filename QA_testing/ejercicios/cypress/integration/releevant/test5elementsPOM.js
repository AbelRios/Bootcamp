/// <reference types="cypress" />

import { MainPage } from "../../page-objects/mainpage.js";
import { ShiftingContentPage } from "../../page-objects/shiftingcontenpage.js";
import { MenuPage } from "../../page-objects/menupage.js"
describe ('test de 5 elementos', () => {

    const mainpage = new MainPage();
    const shiftingcontenpage = new ShiftingContentPage();
    const menupage = new MenuPage;

    beforeEach(() => {

        mainpage.navigateMainPage()
        mainpage.clickShiftingContent()

    })

    it('check there is 5 li elements', () => {

        shiftingcontenpage.clickExample1();
        menupage.check5elements();
        
    })

})
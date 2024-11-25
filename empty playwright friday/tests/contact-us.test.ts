import { test, expect } from "@playwright/test";
import { Applicaiton } from "../app";

test("User can submit contact us form", async ({ page }) => {
  const app = new Applicaiton(page);

  await app.home.open();
  await app.home.expectedLoaded();
  await app.home.openContactUspage();
  //contactUS
  await app.contactUs.fillInNameField();
  await app.contactUs.fillInEmailField();
  await app.contactUs.fillInDescribeField();
  await app.contactUs.clickOnSubmitButton();
  await expect(
    page.getByPlaceholder("Please Describe Your Message")
  ).toBeEmpty();
});

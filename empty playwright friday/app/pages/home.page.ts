import { expect } from "playwright/test";
import { AppComponent } from "../appComponent";

export class Home extends AppComponent {
  private contactUsLink = this.page
    .getByRole("link", { name: "Contact Us" })
    .first();

  async open() {
    await this.page.goto("/");
  }

  async expectedLoaded() {
    await expect(this.page.getByRole("main")).toBeVisible();
  }

  async openContactUspage() {
    await this.contactUsLink.click();
  }
}

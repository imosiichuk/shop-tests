import { expect } from "playwright/test";
import { AppComponent } from "../appComponent";

export class Login extends AppComponent {
  async open() {
    await this.page.goto("/login");
  }

  async expectedLoadedAfterLogin() {
    await expect(
      this.page.locator(".admin .account"),
      "Home page is not loaded"
    ).toBeVisible();
  }

  async doLogin() {
    await this.page
      .getByRole("main")
      .getByPlaceholder("Please Enter Your Email")
      .fill("xotabu4@gmail.com");
    await this.page
      .getByPlaceholder("Please Enter Your Password")
      .fill("xotabu4@gmail.com");
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}

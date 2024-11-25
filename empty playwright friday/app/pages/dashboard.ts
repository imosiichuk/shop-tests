import { expect } from "playwright/test";
import { AppComponent } from "../appComponent";

export class Dashboard extends AppComponent {
  private contactUsLink = this.page.getByRole("link", { name: "Reviews" });

  async open() {
    await this.page.goto("/dashboard");
  }

  async expectedMenuItemVisible(name) {
    await expect(
      this.page.getByRole("link", { name: `${name}` })
    ).toBeVisible();
  }
}

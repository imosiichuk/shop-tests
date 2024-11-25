import { AppComponent } from "../appComponent";

export class Products extends AppComponent {
  async open(path = "/shop/brand/Nizhyn") {
    await this.page.goto(path);
  }

  async selectProductByName(name = "CHERRY TOMATOES By Nizhyn") {
    await this.page.getByRole("link", { name: name }).click();
  }
}

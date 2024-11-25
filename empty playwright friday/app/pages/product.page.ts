import { expect } from "playwright/test";
import { AppComponent } from "../appComponent";
import { MiniCart } from "../components/minicart.component";
import { Review } from "../components/review.component";

export class Product extends AppComponent {
  public miniCart = new MiniCart(this.page);
  public review = new Review(this.page);

  async addProductToBag() {
    await this.page.getByRole("button", { name: "Add To Bag" }).click();
  }

  async expectOrderPlaced() {
    await expect(
      this.page.getByRole("heading", { name: "Thank you for your order." })
    ).toBeVisible();
  }

  async open(productName = "MARINATED_CUCUMBERS_NEZHIN_STYLE") {
    await this.page.goto(
      `https://shopdemo-alex-hot.koyeb.app/product/${productName}`
    );
  }
}

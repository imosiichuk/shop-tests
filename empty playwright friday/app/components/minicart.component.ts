import { expect } from "playwright/test";
import { Component } from "../appComponent";

export class MiniCart extends Component {
  private continueShopingButton = this.page.getByRole("button", {
    name: "Continue shopping",
  });
  private procedToCheckoutButton = this.page.getByRole("button", {
    name: "Proceed To Checkout",
  });
  private placeOrderButton = this.page.getByRole("button", {
    name: "Place Order",
  });
  private closeCartButton = this.page.getByLabel("close the cart");

  async expectedLoaded() {
    await expect(this.continueShopingButton).toBeVisible();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async continueShoping() {
    await this.continueShopingButton.click();
  }

  async closeCart() {
    await this.closeCartButton.click();
  }
}

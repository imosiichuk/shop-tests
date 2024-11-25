import { shopTestLoggedUser } from "../fixture";

shopTestLoggedUser(
  "User can purchase an item",
  async ({ app: { products, product }, newUser }) => {
    await products.open();
    await products.selectProductByName();
    await product.addProductToBag();
    await product.miniCart.placeOrder();
    await product.expectOrderPlaced();
  }
);

shopTestLoggedUser(
  "User can buy 2 products",
  async ({ app: { product, products }, newUser }) => {
    await products.open();
    await products.selectProductByName();
    await product.addProductToBag();
    await product.miniCart.continueShoping();
    await products.selectProductByName("MARINATED CUCUMBERS NEZHIN STYLE");
    await product.addProductToBag();
    await product.miniCart.placeOrder();
    await product.expectOrderPlaced();
  }
);

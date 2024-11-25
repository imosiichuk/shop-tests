import { shopTestLoggedUser } from "../fixture";

shopTestLoggedUser(
  "User can leave a review for the product",
  async ({ app: { products, product }, newUser }) => {
    await product.open();
    await product.review.expectedLoaded();
    await product.review.addReview({
      title: "review title",
      comment: "review comment",
      rating: 4,
    });
    await product.review.expectedReviewPublished();
  }
);

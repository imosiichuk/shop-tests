import { expect } from "playwright/test";
import { Component } from "../appComponent";

export class Review extends Component {
  private starRating = (star: number) =>
    this.page.getByLabel("add rating by typing an").locator("i").nth(star);
  private titleInput = this.page.getByPlaceholder("Enter Review title");
  private publishReviewButton = this.page.getByRole("button", {
    name: "Publish Review",
  });
  private commentInput = this.page.getByPlaceholder("Write Review");

  async expectedLoaded() {
    await expect(this.titleInput).toBeVisible();
    await expect(this.starRating(0)).toBeVisible();
    await expect(this.starRating(4)).toBeVisible();
    await expect(this.titleInput).toBeVisible();
    await expect(this.commentInput).toBeVisible();
    await expect(this.publishReviewButton).toBeVisible();
  }

  async fillInTitleInput(title) {
    await this.titleInput.fill(title);
  }
  async fillInCommentInput(comment) {
    await this.commentInput.fill(comment);
  }

  async publishReview() {
    await this.publishReviewButton.click();
  }

  async addReview(options: { title; comment; rating }) {
    if (options.rating <= 0 || options.rating > 5)
      throw new Error("Rating should be between 1 and 5");
    await this.expectedLoaded();
    await this.fillInTitleInput(options.title);
    await this.fillInCommentInput(options.comment);
    await this.starRating(options.rating - 1).click();
    await this.publishReview();
  }

  async expectedReviewPublished() {
    await expect(
      this.page.getByRole("heading", { name: "Your review has been added" })
    ).toBeVisible();
  }
}

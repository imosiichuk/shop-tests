import { AppComponent } from "../appComponent";

export class ContactUs extends AppComponent {
  private firstNameField = this.page.getByPlaceholder("You Full Name");
  private emailField = this.page.getByPlaceholder("Your Email Address");
  private describeField = this.page.getByPlaceholder(
    "Please Describe Your Message"
  );
  private submitButton = this.page.getByRole("button", { name: "Submit" });

  async open() {
    await this.page.goto("/");
  }

  async fillInNameField(text = "test") {
    await this.firstNameField.fill(text);
  }

  async fillInEmailField(text = `test+${Date.now()}@test.com`) {
    await this.emailField.fill(text);
  }

  async fillInDescribeField(text = "testing is cool!!!") {
    await this.describeField.fill(text);
  }
  async clickOnSubmitButton() {
    await this.submitButton.click();
  }
}

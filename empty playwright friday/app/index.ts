import { API } from "../api";
import { AppComponent } from "./appComponent";
import { ContactUs } from "./pages/contactUs.page";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home.page";
import { Login } from "./pages/login.page";
import { Product } from "./pages/product.page";
import { Products } from "./pages/products.page";

export class Applicaiton extends AppComponent {
  public api = new API(this.page.request);

  home = new Home(this.page);
  contactUs = new ContactUs(this.page);
  login = new Login(this.page);
  product = new Product(this.page);
  products = new Products(this.page);
  dashboard = new Dashboard(this.page);

  async headlessLogin(data: { email: string; password: string }) {
    const token = (await this.api.auth.login(data)).token;
    await this.setTokenToLocalStorage(token);
  }

  async setTokenToLocalStorage(token: string) {
    console.time("setTokenToLocalStorage");
    await this.page.goto("/", { waitUntil: "commit" });
    await this.page.evaluate(
      (_token) => window.localStorage.setItem("token", _token),
      token
    );
    console.timeEnd("setTokenToLocalStorage");
  }
}

import { RequestHolder } from "./requestHolder";
import { env } from "../env";
import {
  LoginResponse,
  UserCreatedResponse,
  UserCreateRequest,
} from "./models";

export class AuthController extends RequestHolder {
  async login(data: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const loginResponse = await this.request.post(`${env.API_URL}/auth/login`, {
      data,
    });
    return loginResponse.json() as Promise<LoginResponse>;
  }

  async register(data: UserCreateRequest): Promise<UserCreatedResponse> {
    const resp = await this.request.post(`${env.API_URL}/auth/register`, {
      data,
    });
    return (await resp.json()) as Promise<UserCreatedResponse>;
  }
}

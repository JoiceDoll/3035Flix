import axios from "axios";
import type { AxiosInstance } from "axios";

class HTTPClient {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!HTTPClient.instance) {
      HTTPClient.instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        withCredentials: false,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`, 
          Accept: "application/json",
        },
      });
    }

    return HTTPClient.instance;
  }
}

export const httpClient = HTTPClient.getInstance();

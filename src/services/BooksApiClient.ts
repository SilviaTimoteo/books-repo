import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { GetBooksRequestModel } from '../models/GetBooksRequestModel';
import { GetBooksResponseModel } from '../models/GetBooksResponseModel';

class BooksApiClient {
  private static _instance = new BooksApiClient();
  protected readonly axiosInstance: AxiosInstance;
  private readonly baseURL = 'http://nyx.vima.ekt.gr:3000/api';

  public constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });
  }

  static getInstance(): BooksApiClient {
    return this._instance;
  }

  private responseBody = (response: AxiosResponse) => response.data;

  async getBooks(body: GetBooksRequestModel): Promise<GetBooksResponseModel> {
    return this.axiosInstance
      .post('/books', body)
      .then((response) => this.responseBody(response) as GetBooksResponseModel);
  }
}

export const BooksService = BooksApiClient.getInstance();

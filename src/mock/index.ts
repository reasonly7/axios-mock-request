import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import userMock from "./user.mock";
import { ResponseData } from "../api/request";

export default (axiosInstance: AxiosInstance) => {
  const mock = new MockAdapter(axiosInstance);

  userMock(mock);
};

export const wrapInResponse = <T>(data: T): ResponseData<T> => {
  return {
    code: 200,
    success: true,
    message: null,
    data: data,
  };
};

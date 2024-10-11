import MockAdapter from "axios-mock-adapter";
import { UserItem } from "../api/user.api";
import { ResponseData } from "../api/request";
import { wrapInResponse } from ".";

export default (mockAdapter: MockAdapter) => {
  mockAdapter.onGet("/users").reply<ResponseData<UserItem[]>>(
    200,
    wrapInResponse([
      { id: 1, name: "Mike", age: 23 },
      { id: 2, name: "Mary", age: 22 },
    ])
  );
};

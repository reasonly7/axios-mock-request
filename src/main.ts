import userApi from "./api/user.api";

document.getElementById("btn")!.addEventListener("click", async () => {
  const userList = await userApi.query({ page: 1, size: 10 });
  console.log(userList);
});

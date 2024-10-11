# axios-mock-request

Mock requests using axios-mock-adapter（用 axios-mock-adapter 进行 mock 请求）

See👀: [./src/mock/index.ts](./src/mock/index.ts) and [./src/api/request.ts](./src/api/request.ts)

```ts
// ./src/api/request.ts
if (import.meta.env.VITE_USE_MOCK === "true") {
  (await import("../mock")).default(request);
}
```

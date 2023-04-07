import { rest } from "msw";
import { mockWrite, mockRead } from "./resolvers/mockBokboot";

export const handlers = [
  rest.post("/sourceCode", mockWrite),
  rest.get("/sourceCode/1", mockRead),
];

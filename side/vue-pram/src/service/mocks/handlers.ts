import { rest } from "msw";
import { loadApp } from "./resolvers/app";

export const handlers = [rest.get("/loadApp", loadApp)];

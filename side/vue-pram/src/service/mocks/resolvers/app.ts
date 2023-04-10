import type {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

const loadApp = async (
  req: RestRequest<any, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  return res(ctx.status(200), ctx.json({ menu: [] }));
};
export { loadApp };

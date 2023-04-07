import type {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

interface CodeProps {
  sourceCodes: Array<SourceProps>;
}

interface SourceProps {
  source: string;
  language: string;
}

interface KeyProps {
  key: string;
}

const mockWrite = async (
  req: RestRequest<CodeProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const { sourceCodes } = req.body;
  if (sourceCodes && sourceCodes.length && sourceCodes[0].source != "") {
    return res(
      ctx.status(200),
      ctx.json({ id: 1, key: 1, message: "Code copy was succesful." })
    );
  } else {
    return res(
      ctx.status(500),
      ctx.json({ message: "Please, Enter the code." })
    );
  }
};

const mockRead = async (
  req: RestRequest<KeyProps, PathParams<string>>,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext
) => {
  const key = req.url.searchParams.get("key");
  if (!key)
    return res(
      ctx.status(500),
      ctx.json({ message: "Please, Enter Code Id." })
    );
  return res(
    ctx.status(200),
    ctx.json({
      sourceCodes: [
        {
          id: 0,
          source: 'var a = 1; console.log("hi");',
          language: "Javascript",
        },
        {
          id: 1,
          source: 'String a = "11";',
          language: "Java",
        },
      ],
    })
  );
};

export { mockWrite, mockRead };

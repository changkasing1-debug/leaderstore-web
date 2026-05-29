import express, { type Express } from "express";
import cors from "cors";
import { createRequire } from "node:module";
import type { HttpLogger, Options } from "pino-http";
import type { IncomingMessage, ServerResponse } from "http";
import router from "./routes/index.js";
import { logger } from "./lib/logger";

const require = createRequire(import.meta.url);
const pinoHttp = require("pino-http") as (opts?: Options) => HttpLogger;

const app: Express = express();

interface PinoHttpRequest extends IncomingMessage {
  id: string | number | object;
}

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: PinoHttpRequest) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;

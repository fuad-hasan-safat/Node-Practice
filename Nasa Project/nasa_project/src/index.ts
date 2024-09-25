import { Context, Elysia, t } from "elysia";
import { Serve } from "bun";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import planets from "./routes/planets.router";
import requestLogger from "./middleware/recordLogger";
import { users } from "./routes/v1/user.routers";
import { v2Apis } from "./api/web/v2/user";
import { v1Apis } from "./api/web/v1/user";

const PORT = process.env.PORT || 8000;

// Middleware to log request, sender ID, and response

const app = new Elysia();
app.onError(({ code, error }) => {
  return (
    {
      msg: "your path is not found",
    }
  );
});
app.use(swagger());
app.use(cors());
app.use(planets);
app.use(v1Apis);
app.use(v2Apis);

app.listen(PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

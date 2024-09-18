import express, { NextFunction, Request, Response } from "npm:express";
import { userdata } from "./demo_data.ts";

const app = express();
const port: number = Number(Deno.env.get("App_PORT")) || 3000;

const logger = function (req: Request, _res: Response, next: NextFunction) {
  console.log(`A ${req.method} request to ${req.url} by ${req.hostname}`);
  // _res.send('You are not allowed')
  next();
};

app.use(logger);
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello From DENO And Express");
});

app.get("/users", (_req: Request, res: Response): void => {
  res.status(200).send(JSON.stringify(userdata));
});

app.post("/users", (req: Request, res: Response) => {
  const existUser = userdata.find((user) => user.id === req.body.id);

  if (existUser) {
  } else {
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      phone: req.body.phone,
    };

    console.log(req);

    userdata.push(newUser);

    res.status(200).send(JSON.stringify(userdata));
  }
});

app.get("/users/:id", (req: Request, res: Response): void => {
  const id = req.params.id;
  const user = userdata.find((data) => data.id === id);
  if (user) {
    res.status(200).send(JSON.stringify(user));
  } else {
    res.status(400).send("No User Found");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

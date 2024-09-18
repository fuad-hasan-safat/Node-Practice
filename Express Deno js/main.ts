import express, { NextFunction, Request, Response } from "npm:express";

import { addNewUser, getUser, getUserbyId } from "./controllers/user.controller.ts";
import { userdata } from "./models/user.model.ts";

const app = express();
const port: number = Number(Deno.env.get("App_PORT")) || 3000;

const logger = function (req: Request, _res: Response, next: NextFunction) {
  console.log(`A ${req.method} request to ${req.url} by ${req.hostname}`);
  // _res.send('You are not allowed')
  next();
};

const checkUserData = function (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const existUser = userdata.find((user) => user.id === req.body.id);
  console.log(req.body);
  if (existUser) {
    res.status(400).json({
      error: "This User Is Already exist",
    });
  } else {
    if (req.body.id && req.body.name && req.body.phone) {
      console.log("Calling Next...");
      const phoneRegex = /^01\d{9}$/;
      if (!phoneRegex.test(req.body.phone)) {
        return res.status(400).json({ error: "Invalid phone number format" });
      }
      next();
    } else {
      res.status(400).json({
        error: "Set all value properly",
      });
    }
  }
};

app.use(logger);
app.use(express.json());

app.get("/", (_req: Request, res: Response): void => {
  res.send("Hello From DENO And Express");
});

app.get("/users", getUser);

app.post("/users", checkUserData, addNewUser);

app.get("/users/:id", getUserbyId);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

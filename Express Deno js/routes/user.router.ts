import express, { NextFunction, Request, Response } from "npm:express";
import { addNewUser, getUser, getUserFile, getUserbyId } from "../controllers/user.controller.ts";
import { userdata } from "../models/user.model.ts";

export const userRouter = express.Router();

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

userRouter.get("/", getUser);
userRouter.post("/", checkUserData, addNewUser);
userRouter.get("/singleuser/:id", getUserbyId);
userRouter.get("/userFile", getUserFile);


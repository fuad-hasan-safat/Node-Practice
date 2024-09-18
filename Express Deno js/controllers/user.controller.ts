import express, { NextFunction, Request, Response } from "npm:express";
import { userdata } from "../models/user.model.ts";

export function getUser(_req: Request, res: Response): void {
    res.status(200).send(JSON.stringify(userdata));
  }

 export function addNewUser (req: Request, res: Response) : void{
    const newUser = {
      id: req.body.id,
      name: req.body.name,
      phone: req.body.phone,
    };
  
    userdata.push(newUser);
  
    res.status(200).json({
      message: "Data Sucessfully saved",
    });
  }

  export function getUserbyId (req: Request, res: Response): void  {
    const id = req.params.id;
    const user = userdata.find((data) => data.id === id);
    if (user) {
      res.status(200).send(JSON.stringify(user));
    } else {
      res.status(400).send("No User Found");
    }
  }
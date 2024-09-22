import express, { NextFunction, Request, Response } from "npm:express";
import { userdata } from "../models/user.model.ts";
import * as path from 'https://deno.land/std@0.140.0/path/mod.ts';


export function getUserFile(_req: Request, res: Response): void {
  console.log('file called')
  // res.sendFile(path.join(Deno.cwd(), 'public', 'skimountain.jpg'));
  res.sendFile(path.resolve('public', 'images' ,'skimountain.jpg'));

}
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
    console.log('Calling user  by id for id', id );
    const user = userdata.find((data) => data.id === id);
    if (user) {
      res.status(200).send(JSON.stringify(user));
    } else {
      res.status(400).send("No User Found");
    }
  }
import express, {NextFunction, Request, Response} from 'npm:express'

const app = express();
const port: number = Number(Deno.env.get('App_PORT')) || 3000;

const logger = function (req: Request, _res: Response, next: NextFunction){
  console.log(`A ${req.method} request to ${req.url} by ${req.hostname}`);
  // _res.send('You are not allowed')
  next();
}

app.use(logger);

app.get('/', (_req: Request, res: Response): void => {
  res.send('Hello From DENO And Express')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
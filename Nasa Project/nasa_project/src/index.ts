import { Elysia , t} from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { note } from './routes/note'

const app = new Elysia()
    // Apply the swagger plugin
    .use(swagger()) 
    .get('/', ({ path }) => `${path} is called here`)
    .use(note)
    .listen(3000)


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

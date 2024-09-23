import { Elysia , t} from 'elysia'
import { swagger } from '@elysiajs/swagger'
import { note } from './routes/note'

const PORT = process.env.PORT || 8000

const app = new Elysia()
app.use(swagger())



app.listen(PORT)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

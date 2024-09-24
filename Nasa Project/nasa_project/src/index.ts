import { Context, Elysia , t} from 'elysia'
import { Serve } from 'bun'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'
import planets from './routes/planets.router'
import requestLogger from './middleware/recordLogger';


const PORT = process.env.PORT || 8000;

// Middleware to log request, sender ID, and response


const app = new Elysia()
app.use(swagger())
app.use(cors())
app.use(planets)


app.listen(PORT)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

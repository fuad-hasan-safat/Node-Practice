import { Elysia } from 'elysia'
import { users } from '../../../routes/v1/user.routers'

export const v1Apis = new Elysia({ prefix: '/v1' })
    .use(users)

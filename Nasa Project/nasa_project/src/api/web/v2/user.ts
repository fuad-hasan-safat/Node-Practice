import { Elysia } from 'elysia'
import { users } from '../../../routes/v2/user.v2.routers'

export const v2Apis = new Elysia({ prefix: '/v2' })
    .use(users)

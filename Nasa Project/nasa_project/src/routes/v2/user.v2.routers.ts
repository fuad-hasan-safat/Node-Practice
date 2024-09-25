import { Elysia } from 'elysia'

export const users = new Elysia({ prefix: '/user' })
    .post('/sign-in', 'Sign in v2')
    .post('/sign-up', 'Sign up v2')
    .post('/profile', 'Profile v2')

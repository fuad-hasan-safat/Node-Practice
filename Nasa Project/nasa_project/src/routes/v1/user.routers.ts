import { Elysia } from 'elysia'

export const users = new Elysia({ prefix: '/user' })
    .post('/sign-in', 'Sign in',{
        afterHandle(context) {
            const { path, query, response, request} = context;
            console.log({path, response, request})
        },
    })
    .post('/sign-up', 'Sign up')
    .post('/profile', 'Profile')

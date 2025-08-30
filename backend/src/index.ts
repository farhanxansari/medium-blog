import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import z from 'zod';

export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.get('/', (c) => {
  return c.text('Server is running 🚀')
})

export default app

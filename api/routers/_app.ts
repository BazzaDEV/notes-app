import { publicProcedure, router } from "../trpc"
import { postRouter } from "./post"

export const appRouter = router({
  post: postRouter,
  hello: publicProcedure.query((opts) => "Hello world!"),
})

export type AppRouter = typeof appRouter

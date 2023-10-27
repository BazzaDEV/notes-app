import { httpBatchLink } from "@trpc/client"
import { appRouter } from "../../api/routers/_app"

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3001/api",
    }),
  ],
})

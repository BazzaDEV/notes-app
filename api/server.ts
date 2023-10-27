import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify"
import fastify from "fastify"
import cors from "@fastify/cors"
import { appRouter } from "./routers/_app"

const server = fastify({
  maxParamLength: 5000,
})

server.register(fastifyTRPCPlugin, {
  prefix: "/api",
  trpcOptions: { router: appRouter },
})

server.register(cors, {
  origin: ["http://localhost:3000"],
})

const port = Number(process.env.PORT) ?? 3001

try {
  server.listen({ port: port })
  console.log("Running Blog API on port", port)
} catch (err) {
  server.log.error(err)
  process.exit(1)
}

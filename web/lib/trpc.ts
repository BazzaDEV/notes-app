import type { AppRouter } from "../../api/routers/_app"
import { createTRPCReact } from "@trpc/react-query"
export const trpc = createTRPCReact<AppRouter>()

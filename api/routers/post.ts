import { prisma } from "../prisma/prisma"
import { publicProcedure, router } from "../trpc"
import { z } from "zod"

export const postRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts

      const post = await prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      })

      return post
    }),
  getById: publicProcedure
    .input(z.object({ id: z.number().int() }))
    .query(async (opts) => {
      const { input } = opts

      const post = await prisma.post.findUnique({ where: { id: input.id } })

      return post
    }),
})

import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const noteRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts;
    }),
});

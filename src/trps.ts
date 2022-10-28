import * as trpc from "@trpc/server";
import { userRoutes } from "./routes/users";

const appRouter = trpc
 
  .query("ping", {
    resolve() {
      return "pong";
    },
  })
  .merge(userRoutes);

export type AppRouter = typeof appRouter;

export default appRouter;
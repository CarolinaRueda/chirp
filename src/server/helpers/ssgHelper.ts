import { createServerSideHelpers } from "@trpc/react-query/server";
import { prisma } from "~/server/db";
import superjson from "superjson";
import { appRouter } from "../api/root";

export const ssg = createServerSideHelpers({
  router: appRouter,
  ctx: { prisma, userId: null },
  transformer: superjson, // optional - adds superjson serialization
});

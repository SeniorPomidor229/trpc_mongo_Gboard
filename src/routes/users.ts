import * as trpc from "@trpc/server";
import User from "../models/user";
import { z } from "zod";

export const userRoutes = trpc
  .router()
  .query("getUsers", {
    async resolve() {
      const users = await User.find();
      return users;
    },
  })
  .mutation("createUser", {
    input: z.object({
      username: z.string(),
      password: z.string(),
    }),
    async resolve({ input: { username, password } }) {
      const newUser = new User({ username, password });
      const savedUser = await newUser.save();
      return savedUser;
    },
  })
  .mutation("deleteNote", {
    input: z.string(),
    async resolve({ input }) {
      const deletedTask = await User.findByIdAndDelete(input);
      if (!deletedTask) throw new Error("User not found");
      return true;
    },
  })
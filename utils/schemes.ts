import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().max(2),
  lastName: z.string().max(2),
  username: z.string().max(2),
});

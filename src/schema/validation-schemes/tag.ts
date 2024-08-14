import { record } from "@lib/zod";
import { z } from "zod";

const TagSchema = z.object({
  id: record("id"),
  name: z.string(),
  owner: record("user"),
  created: z.coerce.date(),
  updated: z.coerce.date()
});

type TTag = z.infer<typeof TagSchema>;

export { TagSchema, type TTag };

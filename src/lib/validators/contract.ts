import { z } from "zod";

export const UploadContractSchema = z.object({
  file: z.file(),
});

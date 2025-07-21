"use server";

import { createClient } from "@/lib/supabase/server";
import { ApiResponse, UploadContractInput, UploadResult } from "@/lib/types";

export const uploadContractFile = async ({
  file,
}: UploadContractInput): Promise<ApiResponse<UploadResult>> => {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from("contracts")
    .upload(file.name, file);

  if (error) {
    return {
      status: "error",
      message: "Failed to upload the file",
    };
  }

  return {
    status: "success",
    message: "File uploaded successfully",
    data: {
      id: data.id,
      path: data.path,
      full_path: data.fullPath,
    },
  };
};

export const createContractRecord = async ({ file }: UploadContractInput) => {
  try {
    const uploadedFile = await uploadContractFile({ file });
    if (uploadedFile.status == "error") {
      console.error({ error: uploadedFile.message });
    } else {
      const supabase = await createClient();
      const user = await supabase.auth.getUser();
      const fileUrl = supabase.storage
        .from("contracts")
        .getPublicUrl(uploadedFile.data!.path);

      const record = await supabase.from("contracts").insert({
        user_id: user.data.user?.id,
        file_name: uploadedFile.data?.path,
        file_url: fileUrl.data.publicUrl,
        version: 1,
      });

      console.log({ record });
    }
  } catch (error) {
    console.log({ error });
  }
};

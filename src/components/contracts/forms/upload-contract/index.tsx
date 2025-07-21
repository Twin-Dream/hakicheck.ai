"use client";

import FileUploader from "@/components/file-uploader";
import { Button } from "@/components/ui/button";
import React from "react";

const UploadContractForm = () => {
  return (
    <div className="space-y-6">
      <FileUploader />
      <Button>Submit</Button>
    </div>
  );
};

export default UploadContractForm;

"use client";

import FileUploader from "@/components/file-uploader";
import { Button } from "@/components/ui/button";
import { createContractRecord } from "@/lib/actions/contracts";
import React, { useState } from "react";

const UploadContractForm = () => {
  const [f, setF] = useState<File>();

  const handleFileUpload = async (file: File) => {
    createContractRecord({ file });
  };

  return (
    <div className="space-y-6">
      <FileUploader
        onFileChangedAction={(fl) => {
          setF(fl);
        }}
      />
      <Button onClick={() => handleFileUpload(f as File)}>Submit</Button>
    </div>
  );
};

export default UploadContractForm;

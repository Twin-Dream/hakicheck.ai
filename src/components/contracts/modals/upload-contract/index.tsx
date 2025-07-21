"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { PropsWithChildren } from "react";
import UploadContractForm from "../../forms/upload-contract";

const UploadContractModal = ({ children }: PropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a contract</DialogTitle>
          <DialogDescription>
            Drag or tap the button below to upload your contract.
          </DialogDescription>
        </DialogHeader>
        <UploadContractForm />
      </DialogContent>
    </Dialog>
  );
};

export default UploadContractModal;

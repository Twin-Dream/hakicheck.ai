import UploadContractModal from "@/components/contracts/modals/upload-contract";
import ContractTable from "@/components/contracts/tables";
import { Button } from "@/components/ui/button";
import React from "react";

const ContractsPage = () => {
  return (
    <section className="px-6 space-y-6">
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">Contracts</h3>
          <p className="text-sm text-muted-foreground">
            Contracts you have uploaded before
          </p>
        </div>

        <UploadContractModal>
          <Button>Upload Contract</Button>
        </UploadContractModal>
      </div>
      <ContractTable />
    </section>
  );
};

export default ContractsPage;

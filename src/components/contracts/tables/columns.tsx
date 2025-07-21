"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IconCircleCheckFilled, IconLoader } from "@tabler/icons-react";
import { Contract } from "@/lib/types";

export const columns: ColumnDef<Contract>[] = [
  {
    accessorKey: "file_name",
    header: "File",
    cell: ({ row }) => <span>{row.original.file_name}</span>,
  },
  {
    accessorKey: "version",
    header: "Version",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5">
        {row.original.status === "Done" ? (
          <IconCircleCheckFilled className="inline-block mr-1" />
        ) : (
          <IconLoader className="inline-block mr-1 animate-spin" />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({}) => {
      return <>Action</>;
    },
  },
];

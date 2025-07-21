import { AppDataTable } from "@/components/shared/app-data-table";
import { columns } from "./columns";
import { createClient } from "@/lib/supabase/server";
import { Contract } from "@/lib/types";

export default async function ContractTable() {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  const contracts = await supabase
    .from("contracts")
    .select("*")
    .eq("user_id", user.data.user?.id);

  const data = contracts.data as Contract[];

  return <AppDataTable columns={columns} data={data} />;
}

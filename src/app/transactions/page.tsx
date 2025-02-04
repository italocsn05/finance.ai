import { DataTable } from "@/components/ui/data-table";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { transactionColumns } from "./columns";
import AddTransactionButton from "@/components/add-transaction-button";

const TransactionsPage = async () => {
  const { userId } = await auth();
  const transactions = await db.transaction.findMany({});

  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton></AddTransactionButton>
      </div>
      <DataTable columns={transactionColumns} data={transactions}></DataTable>
    </div>
  );
};

export default TransactionsPage;

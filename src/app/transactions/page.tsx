import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <div>
      <UserButton showName></UserButton>
    </div>
  );
};

export default TransactionsPage;

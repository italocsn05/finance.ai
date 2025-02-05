"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface upsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (data: upsertTransactionParams) => {
  upsertTransactionSchema.parse(data);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Authentication required");
  }
  await db.transaction.upsert({
    where: {
      id: data.id,
    },
    update: { ...data, userId },
    create: { ...data, userId },
  });
  revalidatePath("/transactions");
};

import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_CATEGORY_LABELS = {
  [TransactionCategory.HOUSING]: "Moradia",
  [TransactionCategory.FOOD]: "Alimentação",
  [TransactionCategory.EDUCATION]: "Educação",
  [TransactionCategory.ENTERTAINMENT]: "Entretenimento",
  [TransactionCategory.SALARY]: "Salário",
  [TransactionCategory.HEALTH]: "Saúde",
  [TransactionCategory.TRANSPORTATION]: "Transporte",
  [TransactionCategory.OTHER]: "Outros",
  [TransactionCategory.UTILITY]: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "PIX",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    label: "Depósito",
    value: TransactionType.DEPOSIT,
  },
  {
    label: "Despesa",
    value: TransactionType.EXPENSE,
  },
  {
    label: "Investimento",
    value: TransactionType.INVESTMENT,
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    label: "Moradia",
    value: TransactionCategory.HOUSING,
  },
  {
    label: "Alimentação",
    value: TransactionCategory.FOOD,
  },
  {
    label: "Educação",
    value: TransactionCategory.EDUCATION,
  },
  {
    label: "Entretenimento",
    value: TransactionCategory.ENTERTAINMENT,
  },
  {
    label: "Salário",
    value: TransactionCategory.SALARY,
  },
  {
    label: "Saúde",
    value: TransactionCategory.HEALTH,
  },
  {
    label: "Transporte",
    value: TransactionCategory.TRANSPORTATION,
  },
  {
    label: "Outros",
    value: TransactionCategory.OTHER,
  },
  {
    label: "Utilidades",
    value: TransactionCategory.UTILITY,
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CREDIT_CARD,
    value: TransactionPaymentMethod.CREDIT_CARD,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.DEBIT_CARD,
    value: TransactionPaymentMethod.DEBIT_CARD,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_TRANSFER,
    value: TransactionPaymentMethod.BANK_TRANSFER,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.BANK_SLIP,
    value: TransactionPaymentMethod.BANK_SLIP,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.CASH,
    value: TransactionPaymentMethod.CASH,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.PIX,
    value: TransactionPaymentMethod.PIX,
  },
  {
    label: TRANSACTION_PAYMENT_METHOD_LABELS.OTHER,
    value: TransactionPaymentMethod.OTHER,
  },
];

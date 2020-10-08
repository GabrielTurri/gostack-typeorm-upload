import { TransactionRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class CreateTransactionService {
  public async execute({ title, type, value }: Request): Promise<Transaction> {
    const transaction = TransactionRepository.create({
      title,
      type,
      value,
    });

    await TransactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

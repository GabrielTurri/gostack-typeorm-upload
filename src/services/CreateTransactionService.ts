import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    type,
    value,
    category,
  }: Request): Promise<Transaction> {
    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Invalid transaction type');
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const checkCategoryExists = await transactionsRepository.findOne({
      where: { category },
    });

    if (checkCategoryExists) {
      // matches category id
    } else {
      // create category
    }

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      // category_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

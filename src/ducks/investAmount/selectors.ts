import { useSelector } from 'react-redux';
import { InvestAmountState } from './slice';

export const useInvestAmountState = () => {
  return useSelector((state: { investAmount: InvestAmountState }) => state);
};
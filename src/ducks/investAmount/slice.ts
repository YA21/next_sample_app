import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as moment from 'moment'

export type InvestAmountState = {
  monthlyInvestAmount: number;
  totalInvestAmount: number;
  accumulationYear: number;
  averageReturnPerYear: number;
  investAmountArray: Array<{date: string, amount: number}>;
  isSimulated: boolean;
};

export const initialState: InvestAmountState = {
  monthlyInvestAmount: 0,
  totalInvestAmount: 0,
  accumulationYear: 5,
  averageReturnPerYear: 4,
  investAmountArray: [],
  isSimulated: false
};

const investAmountSlice = createSlice({
  name: 'investAmount',
  initialState,
  reducers: {
    calcTotalInvestAmount: (state) => {
      let _investAmountArray: Array<{date: string, amount: number}> = [{date: moment().format('YYYY-MM'), amount: 0}];
      for (let i = 0; i < state.accumulationYear * 12; i++) {
        const lastMonthResult = _investAmountArray[i];
        const _amount = parseInt(lastMonthResult.amount * (1 + state.averageReturnPerYear/100/12) + state.monthlyInvestAmount);
        const _date = moment(lastMonthResult.date).add(1, 'M').format('YYYY-MM');
        _investAmountArray.push({date: _date, amount: _amount });
      }
      return {
        ...state,
        investAmountArray: _investAmountArray,
        totalInvestAmount: _investAmountArray[_investAmountArray.length - 1].amount,
        isSimulated: true
      }
    },
    setMonthlyInvestAmount: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        monthlyInvestAmount: action.payload
      };
    },
    setAccumulationYear: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        accumulationYear: action.payload
      };
    },
    setAverageReturnPerYear: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        averageReturnPerYear: action.payload
      };
    }
  },
});

export default investAmountSlice;
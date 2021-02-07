import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InvestAmountState = {
  monthlyInvestAmount: number;
  totalInvestAmount: number;
  accumulationYear: number;
  averageReturnPerYear: number;
  investAmountArray: Array<number>;
};

export const initialState: InvestAmountState = {
  monthlyInvestAmount: 0,
  totalInvestAmount: 0,
  accumulationYear: 5,
  averageReturnPerYear: 4,
  investAmountArray: [0]
};

const investAmountSlice = createSlice({
  name: 'investAmount',
  initialState,
  reducers: {
    calcTotalInvestAmount: (state) => {
      let _investAmountArray = [0];
      for (let i = 0; i < state.accumulationYear * 12; i++) {
        _investAmountArray.push(parseInt(_investAmountArray[i] * (1 + state.averageReturnPerYear/100/12) + state.monthlyInvestAmount));
      }
      return {
        ...state,
        investAmountArray: _investAmountArray,
        totalInvestAmount: _investAmountArray[_investAmountArray.length - 1]
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
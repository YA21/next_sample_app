import React from "react";
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, InputAdornment } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import investAmountSlice from '../ducks/investAmount/slice';
import { useInvestAmountState } from '../ducks/investAmount/selectors';


const CustomButton = styled(Button)({
  color: '#ffffff',
  backgroundColor: '#66ccff',
  margin: '12px 0px',
})

const totalAmountStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 0px 24px 0px'
}

const settingsStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: 'center'

}

const InvestSettings: React.FC = () => {
  const dispatch = useDispatch();
  const state = useInvestAmountState().investAmount;

  const onClickSimulation = () => {
    dispatch(investAmountSlice.actions.calcTotalInvestAmount());
  }

  const onChangeMonthlyInvestAmount = (value) => {
    dispatch(investAmountSlice.actions.setMonthlyInvestAmount(value));
  }

  const onChangeAverageReturnPerYear = (value) => {
    dispatch(investAmountSlice.actions.setAverageReturnPerYear(value));
  }

  const onChangeAccumulationYear = (value) => {
    dispatch(investAmountSlice.actions.setAccumulationYear(value));
  }

  return (
    <div style={{alignItems: 'center'}}>
      <div style={totalAmountStyle} >
        {state.accumulationYear}年後の投資総額: &nbsp;&nbsp;
        <Typography variant="h4">{state.totalInvestAmount}</Typography>
        &nbsp;&nbsp; 円
      </div>
      <div style={settingsStyle}>
        <TextField
          label="月々の投資金額"
          type="number"
          onChange={e => onChangeMonthlyInvestAmount(parseInt(e.target.value))}
          value={state.monthlyInvestAmount}
          InputProps={{
            endAdornment: <InputAdornment position="end">円</InputAdornment>,
          }}
        />
        <TextField
          label="積立年数"
          type="number"
          onChange={e => onChangeAccumulationYear(parseInt(e.target.value))}
          value={state.accumulationYear}
          InputProps={{
            endAdornment: <InputAdornment position="end">年</InputAdornment>,
          }}
        />
        <TextField
          label="平均リターン"
          type="number"
          onChange={e => onChangeAverageReturnPerYear(parseInt(e.target.value))}
          value={state.averageReturnPerYear}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <CustomButton onClick={onClickSimulation}>シミュレーション</CustomButton>
      </div>

    </div>
  )
}

export default InvestSettings;
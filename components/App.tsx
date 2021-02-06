import { useState } from "react";
import { Button, TextField, Typography, Grid, InputAdornment } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


const CustomButton = styled(Button)({
  color: '#ffffff',
  backgroundColor: '#66ccff',
  margin: '12px 0px',
  alignItems: 'right'
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

const App = () => {
  const [monthlyInvestAmount, setMonthlyInvestAmount] = useState<number>(0);
  const [totalInvestAmount, setTotalInvestmentAmount] = useState<number>(0);
  const [accumulationYear, setAccumulationYear] = useState<number>(5);
  const [averageReturnPerYear, setAverageReturnPerYear] = useState<number>(4);

  const calcTotalInvestAmount = () => {
    let _investAmountArray: Array<number> = [0];
    for (let i = 0; i < accumulationYear * 12; i++) {
      _investAmountArray.push(parseInt(_investAmountArray[i] * (1 + averageReturnPerYear/100/12) + monthlyInvestAmount));
    }
    setTotalInvestmentAmount(_investAmountArray[_investAmountArray.length - 1]);
  };

  return (
    <div style={{alignItems: 'center'}}>
      <div style={totalAmountStyle} >
        {accumulationYear}年後の投資総額: &nbsp;&nbsp;
        <Typography variant="h4">{totalInvestAmount}</Typography>
        &nbsp;&nbsp; 円
      </div>
      <div style={settingsStyle}>
        <TextField
          label="月々の投資金額"
          type="number"
          onChange={e => setMonthlyInvestAmount(parseInt(e.target.value))}
          value={monthlyInvestAmount}
          InputProps={{
            endAdornment: <InputAdornment position="end">円</InputAdornment>,
          }}
        />
        <TextField
          label="積立年数"
          type="number"
          onChange={e => setAccumulationYear(parseInt(e.target.value))}
          value={accumulationYear}
          InputProps={{
            endAdornment: <InputAdornment position="end">年</InputAdornment>,
          }}
        />
        <TextField
          label="平均リターン"
          type="number"
          onChange={e => setAverageReturnPerYear(parseInt(e.target.value))}
          value={averageReturnPerYear}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
          }}
        />
        <CustomButton onClick={calcTotalInvestAmount}>シミュレーション</CustomButton>
      </div>

    </div>
  )
}

export default App;
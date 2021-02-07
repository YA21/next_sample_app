import React from "react";
import InvestSettings from './InvestSettings';
import SimulationDetails from './SimulationDetails';
import { useInvestAmountState } from '../ducks/investAmount/selectors';

const App: React.FC = () => {
  const state = useInvestAmountState().investAmount;

  return (
    <div>
      <InvestSettings />
      {
        state.isSimulated != 0 && <SimulationDetails />
      }
    </div>
  )
}

export default App;
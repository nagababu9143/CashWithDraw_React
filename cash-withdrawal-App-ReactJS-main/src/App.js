import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const initialDenominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

const App = () => (
  <CashWithdrawal denominationsList={initialDenominationsList} />
)

export default App

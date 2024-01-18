import logo from './logo.svg';
import './App.css';
import CoinToss from './components/CoinToss/coinToss';
import LotteryOne from './components/Lottery/firstAsk';
import Negative from './components/Lottery/negativeNudge';
import Positive from './components/Lottery/positiveNudge';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <CoinToss /> },
    { path: "lottery1", element: <LotteryOne /> },
    { path: "positive", element: <Positive />},
    { path: "negative", element: <Negative />},
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

//const App = () => <CoinToss />

//export default App;

import './App.css';
import StatCard from './StatCard';

const App = () => {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      <StatCard icon="👉" label="Points" number={3000}/>
      <StatCard icon="⚡" label="Lightnings" number={6540}/>
      <StatCard icon="🤙" label="Shakas" number={337010}/>
      <StatCard icon="💎" label="Diamonds" number={98661}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './styles.css';
import BotCollection from './BotCollections';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(err => console.error('Error fetching bots:', err));
  }, []);

  const enlistBot = (bot) => {
    if (!yourArmy.some(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setBots(bots.filter(b => b.id !== bot.id));
      setYourArmy(yourArmy.filter(b => b.id !== bot.id));
    })
    .catch(err => console.error('Error discharging bot:', err));
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy 
        army={yourArmy} 
        onRelease={releaseBot} 
        onDischarge={dischargeBot}
      />
      <BotCollection 
        bots={bots} 
        onEnlist={enlistBot} 
        onSelect={setSelectedBot}
      />
    </div>
  );
}

export default App

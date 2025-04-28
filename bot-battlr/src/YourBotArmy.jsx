import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots enlisted yet. Click on bots to add them to your army!</p>
      ) : (
        <div className="army-list">
          {army.map(bot => (
            <BotCard 
              key={bot.id} 
              bot={bot} 
              onClick={() => onRelease(bot)}
              onDischarge={() => onDischarge(bot)}
              isInArmy={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy
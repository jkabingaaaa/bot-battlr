import React from 'react';

function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <button onClick={onBack}>Back to List</button>
      <div className="detailed-view">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p className="catchphrase"><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        <button onClick={() => onEnlist(bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;
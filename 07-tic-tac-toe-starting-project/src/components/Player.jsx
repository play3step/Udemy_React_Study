import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(true);
  const toggleEditName = () => {
    setIsEditing((pre) => !pre);
    if (!isEditing) {
      onChangeName(symbol, playerName);
    }
  };
  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChangeName}
          />
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={toggleEditName}>{isEditing ? "Edit" : "save"}</button>
    </li>
  );
};
export default Player;

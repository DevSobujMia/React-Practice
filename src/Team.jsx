import React, { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  return (
    <div className="box">
      <h2>Count: {team}</h2>
      <button className="button" onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

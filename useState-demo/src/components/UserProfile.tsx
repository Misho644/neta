import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Иван");
  const [age, setAge] = useState(25);

  return (
    <div className="component-card">
      <h2>Потребителски профил</h2>
      <p>Име: {name}</p>
      <p>Години: {age}</p>
      <div className="button-group">
        <button onClick={() => setAge(age + 1)}>Увеличи възрастта</button>
        <button onClick={() => setAge(age - 1)}>Намали възрастта</button>
      </div>
      <div className="button-group">
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Промени името"
        />
      </div>
    </div>
  );
};

export default UserProfile;

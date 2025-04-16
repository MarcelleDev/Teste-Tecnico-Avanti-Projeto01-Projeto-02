import { useState } from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUser = async () => {
    if (!username) return;

    setIsLoading(true);
    setError('');
    setUserData(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Usuário não encontrado!');
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchUser();
  };

  const clearData = () => {
    setUsername('');
    setUserData(null);
    setError('');
  };

  return (
    <div className="wrapper">
      <div className="header">
        <FaGithub className="github-icon" />
        <h1 className="title">
          <span className="light">Perfil </span>
          <strong>GitHub</strong>
        </h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchUser}>🔍</button>
      </div>

      {isLoading && <p className="loading">Carregando...</p>}
      {error && <p className="error">{error}</p>}

      {userData && (
        <div className="profile">
          <img src={userData.avatar_url} alt="Avatar" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <button className="clear-btn" onClick={clearData}>Limpar</button>
        </div>
      )}
    </div>
  );
}

export default App;

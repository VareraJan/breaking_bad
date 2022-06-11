import { useState } from 'react';
import styled from'./App.module.css';
import EpisodeList from './components/EpisodeList';

function App() {
  // console.log('render App');
  const [episodes, setEpisodes] = useState('')
  const [err, setErr] = useState({})
  const [loading, setLoading] = useState(false)

  const getEpisodesHandler = () => {
    setErr({})
    setLoading(true)
    fetch(process.env.REACT_APP_API_BREAKING_BAD)
      .then(response => response.json())
      .then(data => setEpisodes(data))
      .catch(data => setErr({message: 'Ошибка загрузки эпизодов', error: data}))
      .finally(setLoading(false))
  }
  console.log('Errors', episodes);
  return (
    <div className={styled.container}>
      <div>
        <h1>Список эпизодов Breaking Bad</h1>
        {loading 
          ?
          <h3>Loading...</h3>
          :
          episodes 
            ?
            <EpisodeList/>
            :
            <button
              className={styled.button}
              onClick={getEpisodesHandler}
            >
              Загрузить эпизоды
            </button>
        }
      </div>
    </div>
  );
}

export default App;

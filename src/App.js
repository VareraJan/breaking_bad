import { useEffect, useState } from 'react';
import styled from'./App.module.css';
import EpisodeList from './components/EpisodeList';

function App() {
  console.log('render App');
  const [episodes, setEpisodes] = useState('')
  const [err, setErr] = useState({})
  const [loading, setLoading] = useState(false)

  const getEpisodesHandler = () => {
    setLoading(true)
    setErr({})

    const getEpisode = async () => {
      const response = await fetch(process.env.REACT_APP_API_BREAKING_BAD)
      const data = await response.json()
      if (response.ok){
        setEpisodes(data)
        setLoading(false)
      } else {
        setErr({message: 'Ошибка загрузки эпизодов', error: data})
        setLoading(false)
      }
    }

    getEpisode()
  }
  console.log('loading', loading);
  
  return (
    <div className={styled.container}>
      <div>
        <h1>Список эпизодов Breaking Bad</h1>
        {loading 
          ?
          <span>Loading...</span>
          :
          err?.message 
            ?
            <h3>{err.message}</h3>
            :
            episodes 
              ?
              <EpisodeList episodes={episodes}/>
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

import { useState } from 'react';
import styled from'./App.module.css';
import EpisodeList from './components/EpisodeList';

function App() {
  const [episodes, setEpisodes] = useState([])
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

  const sortHandler = (sort) => {
    let sortEpisodes = JSON.parse(JSON.stringify(episodes));

    if(sort === 'up') {
      sortEpisodes.sort((a, b) => {
        return a.episode_id - b.episode_id
      })
    }
    if(sort === 'down') {
        sortEpisodes.sort((a, b) => {
        return b.episode_id - a.episode_id
      })
    }
    setEpisodes(sortEpisodes)
  }
  const deleteEpisodesHandler = (id) => {
    setEpisodes(prev => {
      return episodes.filter(ep => ep.episode_id !== id)
    })
  }
  

  if (loading) {
    return (
      <div className={styled.container}>
      <div>
        <h1>Список эпизодов Breaking Bad</h1>
        <span>LOADING...</span>
      </div>
    </div>
    )
  }

  return (
    <div className={styled.container}>
      <div>
        <h1>Список эпизодов Breaking Bad</h1>
        {err?.message 
          ?
          <h3>{err.message}</h3>
          :
          episodes.length 
            ?
            <EpisodeList
              sortHandler={sortHandler}
              episodes={episodes}
              deleteEpisodesHandler={deleteEpisodesHandler}
            />
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

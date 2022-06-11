import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from'./App.module.css';
import EpisodeList from './components/EpisodeList';
import { getEpisodeThunk } from './redux/thunk/episodesThunk';

function App() {
  const [episodes, setEpisodes] = useState([])
  const [err, setErr] = useState({})
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const getEpisodesHandler = () => {
    setLoading(true)
    setErr({})
    dispatch(getEpisodeThunk())
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
        return a.characters.length - b.characters.length
      })
    }
    if(sort === 'down') {
        sortEpisodes.sort((a, b) => {
        return b.characters.length - a.characters.length
      })
    }
    setEpisodes(sortEpisodes)
  }
  const deleteEpisodesHandler = (id) => {
    setEpisodes(prev => {
      return episodes.filter(ep => ep.episode_id !== id)
    })
  }
  const charactersCountHandler = (operator, episode_id) => {
    setEpisodes(prev => {
      const newEpisodes = JSON.parse(JSON.stringify(prev))
      return newEpisodes.map(ep => {
        if (ep.episode_id === episode_id) {
          operator === '+' ?  ep.characters.push('_') : ep.characters.pop()
        }
        return ep
      })
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
              charactersCountHandler={charactersCountHandler}
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

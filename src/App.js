import { useDispatch, useSelector } from 'react-redux';
import styled from'./App.module.css';
import EpisodeList from './components/EpisodeList';
import { setError, setLoading } from './redux/actions/loadingAction';
import { getEpisodeThunk } from './redux/thunk/episodesThunk';

function App() {
  const episodes = useSelector((store) => store.episodes)
  const {loading, error} = useSelector(store => store.loading)

  const dispatch = useDispatch()

  const getEpisodesHandler = () => {
    dispatch(setLoading(true))
    dispatch(setError({}))
    dispatch(getEpisodeThunk())
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
        {error?.message 
          ?
          <h3>{error.message}</h3>
          :
          episodes.length 
            ?
            <EpisodeList
              episodes={episodes}
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

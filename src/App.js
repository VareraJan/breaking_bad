import { useDispatch, useSelector } from 'react-redux';
import EpisodeList from './components/EpisodeList';
import { setError, setLoading } from './redux/actions/loadingAction';
import { getEpisodeThunk } from './redux/thunk/episodesThunk';
import styled from 'styled-components'

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
      <Container>
      <div>
        <h1>Список эпизодов Breaking Bad</h1>
        <span>LOADING...</span>
      </div>
    </Container>
    )
  }

  return (
    <Container>
      <div>
        <H1>Список эпизодов Breaking Bad</H1>
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
            <Button
              onClick={getEpisodesHandler}
            >
              Загрузить эпизоды
            </Button>
        }
      </div>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Button = styled.button`
background: rgba(5, 9, 238, 0.9);
color: rgba(255, 255, 255, 0.9);
font-size: calc(var(--index)*1.7);
height: 2.2em;
width: 12em;
border-radius: 0.5em;
border: none;
cursor: pointer;
`
const H1 = styled.h1`
font-size: calc(var(--index)*3);
`

export default App;

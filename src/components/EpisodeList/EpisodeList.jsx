import { useDispatch } from 'react-redux';
import { setEpisode } from '../../redux/actions/episodesAction';
import { setSorted } from '../../redux/actions/sortedAction';
import EpisodeCard from '../EpisodeCard';
import styled from 'styled-components'

const EpisodeList = ({episodes}) => {
  
  const dispatch = useDispatch()

  const sortHandler = (sort) => {
    dispatch(setSorted(sort))
    dispatch(setEpisode(sort))
  }

  return ( 
    <Container>
      <Button
        onClick={() => sortHandler('down')}
      >
        Сортировать по убыванию количества персонажей
      </Button>
      <Button
        onClick={() => sortHandler('up')}
      >
        Сортировать по возрастанию количества персонажей
      </Button>
    <CardList>
      {episodes.map(el => 
      <EpisodeCard
        key={el.episode_id}
        episode={el}
      />)}
    </CardList>
    </Container>
   );
}
 
const Container = styled.div`
display: flex;
flex-direction: column;
`
const CardList = styled.div`
border: 1px solid orange;
border-radius: .3em;
padding: 1em;
`
const Button = styled.button`
background: rgba(255, 190, 10, 0.9);
  font-size: calc(var(--index)*1.7);
  height: 2.2em;
  border-radius: 0.5em;
  border: none;
  margin-bottom: 1em;
  cursor: pointer;
`

export default EpisodeList;

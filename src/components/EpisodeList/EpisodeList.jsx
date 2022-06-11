import { useDispatch } from 'react-redux';
import { setEpisode } from '../../redux/actions/episodesAction';
import { setSorted } from '../../redux/actions/sortedAction';
import EpisodeCard from '../EpisodeCard';
import styled from './EpisodeList.module.css'

const EpisodeList = ({episodes}) => {
  
  const dispatch = useDispatch()

  const sortHandler = (sort) => {
    dispatch(setSorted(sort))
    dispatch(setEpisode(sort))
  }

  return ( 
    <div className={styled.container}>
      <button
        className={styled.sortBtn}
        onClick={() => sortHandler('down')}
      >
        Сортировать по убыванию количества персонажей
      </button>
      <button
        className={styled.sortBtn}
        onClick={() => sortHandler('up')}
      >
        Сортировать по возрастанию количества персонажей
      </button>
    <div className={styled.cardList}>
      {episodes.map(el => 
      <EpisodeCard
        key={el.episode_id}
        episode={el}
      />)}
    </div>
    </div>
   );
}
 
export default EpisodeList;

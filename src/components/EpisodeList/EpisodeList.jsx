import EpisodeCard from '../EpisodeCard';
import styled from './EpisodeList.module.css'

const EpisodeList = ({episodes, sortHandler, deleteEpisodesHandler}) => {

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
        deleteEpisodesHandler={deleteEpisodesHandler}
      />)}
    </div>
    </div>
   );
}
 
export default EpisodeList;

import EpisodeCard from '../EpisodeCard';
import styled from './EpisodeList.module.css'

const EpisodeList = ({episodes}) => {

  return ( 
    <div className={styled.container}>
      <button className={styled.sortBtn}>
        Сортировать по убыванию количества персонажей
      </button>
      <button className={styled.sortBtn}>
        Сортировать по возрастанию количества персонажей
      </button>
    <div className={styled.cardList}>
      {episodes.map(el => <EpisodeCard key={el.episode_id} episode={el}/>)}
    </div>
    </div>
   );
}
 
export default EpisodeList;

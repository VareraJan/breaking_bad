import { useEffect, useState } from 'react';
import styled from './EpisodeCard.module.css'

const EpisodeCard = ({ episode }) => {
  const [characters, setCharacters] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    setCharacters(episode.characters.length)
    setText('Персонаж')
  }, [episode])
  console.log('Card', episode);
  return ( 
    <div  className={styled.card}>
      <div className={styled.cardContext}>
        <h2>Эпизод № {episode.episode_id}</h2>
        <div className={styled.charactersFilter}>
          <button className={styled.charactersBtn}>-</button>
          <span>{characters}</span>
          <button className={styled.charactersBtn}>+</button>
          <span>{text}</span>
        </div>
      </div>
      <button className={styled.deleteBtn}>Удалить</button>
    </div>
   );
}
 
export default EpisodeCard;

import { useEffect, useState } from 'react';
import styled from './EpisodeCard.module.css'

const EpisodeCard = ({ episode, deleteEpisodesHandler, charactersCountHandler }) => {
  const [characters, setCharacters] = useState(0)
  const [text, setText] = useState('')

  // words - параметры массива:
  // В вариант1 попадают слова с окончаниями для:
  // 1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141 и т.д.
  // В вариант2:
  // 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44 ... 102, 103, 104, 122, 123, 124, 132 и т.д.
  // В вариант3:
  // 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35 и т.д.
  
  const sklonenie = (number, words) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

  useEffect(() => {
    setCharacters(episode.characters.length)
    setText(sklonenie(episode.characters.length, ['Персонаж', 'Персонажа', 'Персонажей']))
  }, [episode])
  return ( 
    <div  className={styled.card}>
      <div className={styled.cardContext}>
        <h2>Эпизод № {episode.episode_id}</h2>
        <div className={styled.charactersFilter}>
          <button
            className={styled.charactersBtn}
            onClick={() => charactersCountHandler('-', episode.episode_id)}
          >
            -
          </button>
          <span>{characters}</span>
          <button
            className={styled.charactersBtn}
            onClick={() => charactersCountHandler('+', episode.episode_id)}
          >
            +
          </button>
          <span>{text}</span>
        </div>
      </div>
      <button
        className={styled.deleteBtn}
        onClick={() => deleteEpisodesHandler(episode.episode_id)}
      >
        Удалить
      </button>
    </div>
   );
}
 
export default EpisodeCard;

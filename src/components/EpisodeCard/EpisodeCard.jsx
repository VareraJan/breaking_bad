import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersCaunter, deleteEpisode } from '../../redux/actions/episodesAction';
import styled from 'styled-components'

const EpisodeCard = ({ episode }) => {
  const [characters, setCharacters] = useState(0)
  const [text, setText] = useState('')
  const { sorted } = useSelector(state => state)
  const dispatch = useDispatch()

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
    <Card>
      <CardContext>
        <H2>Эпизод № {episode.episode_id}</H2>
        <CharactersFilter>
          <Button
            onClick={() => dispatch(charactersCaunter(episode.episode_id, '-', sorted) )}
          >
            -
          </Button>
          <Span>{characters}</Span>
          <Button
            onClick={() => dispatch(charactersCaunter(episode.episode_id, '+', sorted) )}
          >
            +
          </Button>
          <Span>{text}</Span>
        </CharactersFilter>
      </CardContext>
      <Button
        bgc='tomato'
        height='3em'
        width='6em'
        onClick={() => dispatch( deleteEpisode(episode.episode_id))}
      >
        Удалить
      </Button>
    </Card>
   );
}

const Card = styled.div`
border-bottom: 1px solid grey;
display: flex;
justify-content: space-around;
align-items: center;
`
const H2 = styled.h2`
font-size: calc(var(--index)*2.5);
`
const CardContext = styled.div`
display: flex;
flex-direction: column;
margin-bottom: .5em;
`
const CharactersFilter = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Button = styled.button`
background: ${props => props.bgc || 'rgba(5, 9, 238, 0.9)'};
color: rgba(255, 255, 255, 0.9);
font-size: calc(var(--index)*1.7);
height: ${props => props.height || '1.7em' };
width: ${props => props.width || '2em' };
border-radius: 0.5em;
border: none;
cursor: pointer;
`
const Span = styled.span`
margin: 0.5em;
font-size: calc(var(--index)*1.7);
`

export default EpisodeCard;

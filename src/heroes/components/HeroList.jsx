import { getHeroesByPublisher } from "../helpers"

export const HeroList = ({ publisher }) => {
  
    const heroes = getHeroesByPublisher( publisher );

    return (
    <ul>
      <li key={heroes.id} >Superman</li>
      <li>Batman</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

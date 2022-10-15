import React from 'react'
import { Link } from 'react-router-dom';


function Card(props) {

  return (
    <article>
      <Link to={`/stores/details/${props.value.id}`}>
        <img src={props.value.image} alt={props.value.name} />
      </Link>
      <li>{props.value.name}</li>
      <li>{props.value.species}</li>


    </article>
  )
}

export default Card

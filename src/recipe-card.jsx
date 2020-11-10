import React from 'react';


const Recipecard = ({title, time, image, link, ingredients, calories}) => {
  return (
    <div className='recipe-card'>
      <h1>{title}</h1>
      <ul className="ingredients">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p className="time">Total Time: {time} mins</p>
     <a href={link}>
     <img src={image} alt="" />
     </a>
    </div>
  )
}

export default Recipecard
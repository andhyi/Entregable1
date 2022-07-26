import React from 'react'

const QuoteBox = ({randomUser, randomColors, getRandomAll}) => {

const objectStyle = {
  color: randomColors

}

const objectBgStyle = {
  backgroundColor: randomColors
}

  return (
    <article className='card' style={objectStyle}>
      <header>
        {/* <img className ='card__img' src={randomUser.picture.large} alt="" /> */}
      </header>
      <div className="card__container">
        {/* <h2 className='card__name'>{`${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`}</h2> */}
        <p className='card__item'>"{randomUser.quote}"</p>
        <p className='card__item'>{randomUser.author}</p>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
      </div>
    </article>
  )
}

export default QuoteBox
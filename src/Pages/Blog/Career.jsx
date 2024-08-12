import React from 'react'
import career from '../../data/career'

const Careercard = ({CareerQuestion,CareerAnswer}) => {
  return(
    <div className="BlogCard">
       <div className="item">
      
        <div className="title">
          <h2>{CareerQuestion}</h2>
          <span> + </span>
        </div>
        <div>{CareerAnswer}</div>
      </div>
    </div>
  )
}

function Career() {
  return (
    <div className='BlogWrapper'>
      <h1>Career and Industry Insights</h1>
      {career.map((current,i) =>(
        <Careercard
        key={i}
        CareerQuestion={current.CareerQuestion}
        CareerAnswer={current.CareerAnswer}
        />
      ))}
    </div>
  )
}

export default Career
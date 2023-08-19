import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new  Error('not a hero he is  a legend')
    }
  return (
    <div>
{heroName}
    </div>
  )
}

export default Hero

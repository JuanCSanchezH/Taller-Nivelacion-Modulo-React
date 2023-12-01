import React, { useState } from 'react'

const MiContador = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = (e) => {
        e.target.attributes.value.value == 'increase' ? 
        setCounter(counter+1) : setCounter(counter-1);
    }

  return (
    <>
        <button value='decrease' onClick={(e)=>handleCounter(e)}>-</button>
        <span>{counter}</span>
        <button value='increase' onClick={(e)=>handleCounter(e)}>+</button>
    </>
  )
}

export default MiContador
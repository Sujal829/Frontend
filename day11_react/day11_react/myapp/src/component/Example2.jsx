import React, { useEffect, useLayoutEffect } from 'react'

function Example2() {

    useEffect(()=>{
        console.log('UseEffect runs!');
    })
    
    useLayoutEffect(()=>{
        console.log('useLayoutEffect runs!');
    })

  return (
    <div>
        <h1>Hello!</h1>
    </div>
  )
}

export default Example2

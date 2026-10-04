import React, { useEffect } from 'react'

function Home() {
    useEffect(() => {
      console.log('Mount');
      
    
      return () => {
        console.log('unmount');
        
      }
    }, [])
    
  return (
    <div>Home</div>
  )
}

export default Home
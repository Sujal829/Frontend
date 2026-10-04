import React, { useEffect, useMemo, useState } from 'react'

function FilteredList({ items, filterText }){
    const filtered = useMemo(()=>{
        return items.filter((i)=> i.includes(filterText));
    },[items, filterText]);

    return (
        <ul>
            {filtered.map((d)=>(
                <li key={d}>{d}</li>
            ))}
        </ul>
    )
}

function ExampleUseMemo2() {
    const [posts, setPosts] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res)=> res.json())
            .then((data)=> setPosts(data.map(d=> d.title)))
            .catch(err=> setError(err))
    },[]);
    
    if(error) return (<p>Oops! something went wrong...</p>)
  return (
    <div>
      <input value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
      <FilteredList filterText={filterText} items={posts}/>
    </div>
  )
}

export default ExampleUseMemo2

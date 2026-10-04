import React from 'react'
import { useApi } from '../hooks/useApi';
import CustomTable from '../ui/CustomTable';
// import ApiContext from '../context/ApiContext'
import { ClipLoader } from "react-spinners";

function Posts() {
    // const {data, loading, error} = useContext(ApiContext);
    const {data, loading, error, deletePost} = useApi();

  if (loading) return <ClipLoader />
  if (error) {
    return <p style={{color: 'red'}}>{error}</p>
  }
  const handleDelete=(id)=>{
    alert(id)
    deletePost(id)
  };
  return (
    <div>
        {/* <ul>
          {data.map((item)=><li key={item.id}>{item.title}</li>)}
        </ul> */}
          <CustomTable data={data} rowClick={handleDelete}/>
    </div>
  )
}

export default Posts

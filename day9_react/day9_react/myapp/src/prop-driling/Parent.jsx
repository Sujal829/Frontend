import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent=()=>{
    const data ={
        name:'Rutuja',
        occupation: 'ASE',
        city: 'Pune'
    }
    return(
    <div>
        <h2>Parent</h2>
        <Child1 userData={data} />
        <Child2 />
    </div>)
}

export default Parent;
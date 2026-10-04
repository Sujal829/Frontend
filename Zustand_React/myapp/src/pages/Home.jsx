import { useEffect } from "react";
import useProductStore from "../store/productStore";
import useAuthStore from "../store/authStore";
import PropTypes from "prop-types";

const Home=({text})=>{
    const {fetchProducts: getList, products: list} = useProductStore(state=> state)
    const logout = useAuthStore(s=>s.logout);

    useEffect(()=>{
        getList()
    },[]);

    return (
        <div>
            <div>
                <button onClick={logout} >Logout</button>
            </div>
            <div>
                {text}
            </div>
            <ul>
                {list?.products?.map(({title, id})=><li key={id}>{title}</li>)}
            </ul>
        </div>
    )
}

// Note
// below code will only work < v19 
// Home.propTypes = {
//   text: PropTypes.string,
// };
// Home.defaultProps = {
//   text: 'Hello, world!',
// };

export default Home;
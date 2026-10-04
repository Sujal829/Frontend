import Store from "./store"

const Dispatcher={
    dispatch(action){
        Store.handleAction(action)
    }
}

export default Dispatcher;
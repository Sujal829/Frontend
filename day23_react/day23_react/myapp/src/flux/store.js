let cart =[];
let listeners = [];

const Store = {
    getCart(){
        return cart;
    },
    getListener(){
        return listeners
    },
    addChangeListener(callback){
        listeners.push(callback)
    },
    emitChange(){
        listeners.forEach((l)=> l());
    },
    handleAction(action){
        if(action.type === 'ADD_TO_CART'){
            cart.push(action.item);
            this.emitChange();
        }
        if(action.type === 'REMOVE_ITEM_CART'){
            cart = cart.filter(d=> d !== action.item)
            this.emitChange();
        }
    }

};

export default Store;
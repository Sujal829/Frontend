const initialState={
    todo: []
}

const handlers ={
    ['ADD_TODO']:(state, action)=>{
        const newTodo = {
            id: Date.now(),
            text: action.payload,
        }
        return {...state, todo: [...state.todo, newTodo]}
    },
    ['DELETE_TODO']:(state, action)=>{
        return{
            ...state,
            todo: state.todo.filter(d=> d.id != action.payload)
        }
    },
};

export default function todoReducer(state=initialState, action){
    const handler = handlers[action.type];
    return handler ? handler(state,action) : state
}
export const initialState = {
    name:'',
    email:'',
    password:''
};

// export const signupReducer=(state, action)=>{
//     switch (action.type) {
//         case 'name':
//             console.log('Case name:',{ ...state, name: action.value} );
//             return { ...state, name: action.value};
//         case 'email':
//             console.log('Case email:',{ ...state, email: action.value} );
//             return { ...state, email: action.value};
//         case 'password':
//             console.log('Case password:',{ ...state, password: action.value} );
//             return { ...state, password: action.value};            
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }
// }

export const signupReducer=(state, action)=>{
    switch (action.type) {
        case 'update':
            return { ...state, [action.field]: action.value }
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
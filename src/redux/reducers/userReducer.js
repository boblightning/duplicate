const INITIAL_STATE = {
    id: null,
    username: "",
    email: "",
    role: "",
    status: "",
    cart:[]
}


export const userReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("DATA DARI ACTION PAYLOAD==>", action.payload)
            return { ...state, ...action.payload }
                // ...state,
                // id: action.payload.id,
                // username: action.payload.username,
                // email: action.payload.email,
                // role: action.payload.role,
                // status: action.payload.status,
                // cart:action.payload.cart
            case "UPDATE_CART_USER":
                return{...state,cart:action.payload}
        case "LOGOUT":
            return INITIAL_STATE
        default:
            return state
    }
}
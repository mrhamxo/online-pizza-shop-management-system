export const placeOrderReducer = (state = {}, action) => {
    switch(action.type){
        case 'PLACE_ORDER_REQUEST':
            return{
                loading: true,
            }
        case 'PLACE_ORDER_SUCCESS':
            return{
                loading: false,
                order: action.order,
                success: true
            }
        case 'PLACE_ORDER_FAILURE':
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const getUserOrderReducer = (state = {orders: []}, action) => {
    switch(action.type){
        case 'USER_ORDER_REQUEST':
            return{
                loading: true,
            }
        case 'USER_ORDER_SUCCESS':
            return{
                loading: false,
                success: true,
                orders: action.payload,
            }
        case 'USER_ORDER_FAILURE':
            return{
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}
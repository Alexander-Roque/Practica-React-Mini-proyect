
export const initialState = [];
export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

export function reducer(state, action){

    const {type:actionType, payload:actionPayload} = action;

    switch(actionType){
        case CART_ACTION_TYPES.ADD_TO_CART:{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item=>item.id === id)

            if(productInCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productInCartIndex].quantity += 1;
            return newState
        }

        return [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const {id} = actionPayload
            return state.filter(item => item.id !== id)
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            return initialState
        }
    }
    return state
}

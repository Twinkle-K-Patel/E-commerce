// Here we define the application states and the actions to make the changes to the state.

// Basket will hold element that will add or remove to the basket
export const initialState={
    basket : []
}

//Selector
export const getBasketTotal= (basket)=>{
 return (basket?.reduce((amount,item)=>item.price +amount,0));
}

const reducer= (state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            }

        case "REMOVE_FROM_BASKET":
            const index= state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            )

            const newBasket =[...state.basket]

            // splice will remove that particular item from the newbasket and return true i.e. 1
            if(index >= 0){
                newBasket.splice(index,1)
            } else {
                console.warn(
                    `Can't remove product {id: ${action.id}}`
                )
            }

            return{
                ...state,
                basket: newBasket
            }
        default:
            return state
    }

}
//Line 13 add new product detail to data layer
//return will return an object means return total data present in data layer
// State processed by the reducer is immutable
//So incoming state coming as an argument can not be directly changed
//Reducer fun has to return completely new state object



export default reducer
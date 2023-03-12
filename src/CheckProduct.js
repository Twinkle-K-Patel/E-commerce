import "./CheckoutProduct.css"
import { useStatevalue } from "./StateProvider"

export default function CheckProduct({id,title,price,rating,image}){
    const [{basket},dispatch]=useStatevalue()

    const removeFrombasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

return (
    <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
                </div>
            <button onClick={removeFrombasket}>Remove from Basket</button>
        </div>
    </div>
)
 }
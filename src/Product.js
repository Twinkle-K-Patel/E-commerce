import "./Product.css"
import { useStatevalue } from "./StateProvider"
// Line 2 will make Product.js as a Child component of StateProvider

export default function Product({id,title,price,rating,image}){

    const [state,dispatch]=useStatevalue()

    // dispatch is Js object that will have type feature
    //item is data we want to push in the data layer

    const addToBasket=()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id:id,
                price:price,
                image:image,
                rating:rating,
                title:title
            }
        })
    }



    return(
        <div className="product">
            <div className="product__info">
            <p> {title}</p>
            <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
            
            </div>

            <img src={image}></img>
            <button onClick={addToBasket}> Add to Cart</button>

        </div>
    )
}
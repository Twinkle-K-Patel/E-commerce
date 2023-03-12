import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStatevalue } from "./StateProvider"
import { getBasketTotal } from "./reducer"

export default function Subtotal(){
    const [{basket},dispatch] =useStatevalue()
    
    return(
        <div className="subtotal"> 
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>${value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"></input>
                        This order contain a gift
                    </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
               
                />
            <button>Proceed to Checkout</button>

        </div>
    )
}
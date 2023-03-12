import "./Checkout.css"
import CheckProduct from "./CheckProduct"
import Subtotal from "./Subtotal"
import { useStatevalue } from "./StateProvider"

export default function Checkout(){

    const [{basket},dispatch] =useStatevalue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                
                
                 {basket.map((item)=>(
                    <CheckProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        rating={item.rating}
                        />
                 ))}
                </div>
                </div>

                <div className="checkout__right">
                <Subtotal />
            </div>
            </div>
        
    )
}
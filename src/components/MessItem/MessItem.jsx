import React, { useContext, useState } from 'react'
import './MessItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const MessItem = ({ messSelected,image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {mess,setMess,cartItems,addToCart,removeFromCart,url,currency} = useContext(StoreContext);

    return (
        <div className={'mess-item' + (mess&&id==mess._id? '-selected':'')}
            onClick={() => 
                setMess(messSelected)
                
            }
        >
            <div className='mess-item-img-container'>
                <img className='mess-item-image' src={url+"/images/"+image} alt="" />
            </div>
            <div className="mess-item-info">
                <div className="mess-item-name-rating">
                    <p>{name}</p> 
                </div>
                <p className="mess-item-desc">{desc}</p>
            </div>
        </div>
    )
}

export default MessItem

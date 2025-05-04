import React, { useContext } from 'react'
import './MessDisplay.css'
import MessItem from '../MessItem/MessItem'
import { StoreContext } from '../../Context/StoreContext'

const MessDisplay = ({setShowMess}) => {

  const {mess_list} = useContext(StoreContext);

  return (
    <div className='mess-display' id='mess-display'>
      <h2>Select Mess</h2>
      <div className='mess-display-list'>
        {mess_list.map((item)=>{
          
            return <MessItem messSelected={item} key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
  
        })}
      </div>
    </div>
  )
}

export default MessDisplay

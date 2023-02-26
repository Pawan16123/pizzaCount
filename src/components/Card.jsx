import React, { useEffect, useState } from 'react'
import logo from '../pizza.png';


function Card() {
    const [count, setCount] = useState(0);
    let [total, setTotal] = useState(0);
    let[toPay, setToPay] = useState(0);
    const [range, setRange] = useState(0);
    const handleChange = (event) => {
        if(total>0){
            if (event.target.checked) {
                setTotal(total + 5);
            } else {
                setTotal(total - 5);
            }
        };
    }
    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        if(count>0) setCount(count-1)
    }
    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);
        setRange(newValue);
    };
    useEffect(()=>{
        setTotal(count*50);
    },[count])
    useEffect(()=>{
        setToPay(total - (total*(range/100)));
    },[range, total])
  return (
    <div className='main-div'>
        <section className='top-sec'>
            <div className="title-section">
                <h1>Double Cheese Pizza</h1>
                <span>We are currently serving one pizza only. Please taste and review</span>
            </div>
            <div className="innerContent">
                <div className="leftElement">
                    <div className="update-quantity">
                        <p>Add Quantity</p>
                        <button onClick={handleIncrement}>+</button> {count} <button onClick={handleDecrement}>-</button>            
                        <div className='checkbox'>
                        <input type="checkbox" onChange={handleChange} />Add On
                        </div>
                    </div>
                </div>
                <div className="rightElement">
                    <img src={logo} className="pizzaImg" alt="pizza" />
                </div>
            </div>
        </section>
        <section className='bottom-sec'>
            <div className="totalPrice">
                <p>Total: ${total}</p>
                <p className='totalPrice-discount'>Dicount:{range}% <input type="range" min="0" max="60" value={range} onChange={handleInputChange} /></p>
                <p className='totalPrice-topay'>To Pay: ${toPay}</p>
            </div>
        </section>
    </div>
  )
}

export default Card
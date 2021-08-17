import React, { useState , useEffect } from 'react'

const useTax = (t1,t2)=> {
    const [price, setPrice] = useState(1000)
    const [tax1] = useState(t1)
    const [tax2] = useState(t2)

    const tax = () => {
        return Math.floor(price * (1.0 + tx1 / 100))
    }
    const reduced = () =>{
        return Math.floor(price * (1.0 + tx2 / 100))
    }

    return [price , tax , reduced ,setPrice]
}

function AlertMessage(props) {
    const [price , tax, reduced ,setPrice] = useTax(10, 8)

    const DoChange = (e)=> {
        let p = e.target.value
        setPrice(p)
    }
}
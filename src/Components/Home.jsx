import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/app/action';
import style from "../Style/Home.module.css"
import { Card } from './Card';

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.app.data)

    const fetchData = () => {
        axios.get("https://api-009.herokuapp.com/food")
        .then((res) => {
            let data = res.data
            dispatch(getData(data))
        })
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className={style.cardDiv}>
            {
                data && data.map((el) => <Card key={el.id} data={el}/>)
            }
        </div>

    )
}

export { Home }
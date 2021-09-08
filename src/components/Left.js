import React, {useEffect, useState} from 'react'
import styles from './Left.module.css'
import { fetchData } from '../utils/fetch'
import {getDayOfWeek} from './Right'

export default function Left() {
    const [temperature, setTemperature] = useState(0)
    const [description, setDescription] = useState('')
    const [symbol, setSymbol] = useState('')

    useEffect(() => {
        fetchData(`current/102013159&lang=ru`).then(data => {
            setTemperature(data.current.temperature)
            setDescription(data.current.symbolPhrase)
            setSymbol(data.current.symbol)
        })
    }, [])

    // useEffect(() => {
    //     fetchData().then(data => {
    //         setTemperature(data.forecast[0].maxTemp)
    //         setDescription(data.forecast[0].symbolPhrase)
    //         setSymbol(data.forecast[0].symbol)
    //         setDate(data.forecast[0].date)
    //     })
    // }, [])
    // const url = process.env.REACT_APP_BASE_URL
    // const token = process.env.REACT_APP_TOKEN
    // // fetch data from API with token
    // useEffect(() => {
    //     fetch(`${url}&token=${token}` ,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setTemperature(data.forecast[0].maxTemp)
    //         setDescription(data.forecast[0].symbolPhrase)
    //         setSymbol(data.forecast[0].symbol)
    //     })
    // }, [url, token])

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <button className={styles.search}>
                Searh for place
                </button>
            </div>
            <div className={styles.image}>
                <img src={`https://developer.foreca.com/static/images/symbols/${symbol}.png`} alt="symbol" className={styles.symbol}/>
            </div>
            <div className={styles.temperature}>
                <p>{temperature}℃</p>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
                <p className={styles.date}>{getDayOfWeek(Date.now())}</p>
            </div>
        </div>
    )
}

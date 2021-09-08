import React, {useState, useEffect} from 'react'
import styles from './Right.module.css'
import { fetchData } from '../utils/fetch'


// const url = process.env.REACT_APP_BASE_URL
// const token = process.env.REACT_APP_TOKEN

export function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
  }

export default function Right() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData(`forecast/daily/102013159&lang=ru&dataset=full`).then(data => {
            setData(data.forecast)
        })
    }, [])

    
    
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {data && data.map(item => 
                    <div key={item.date} className={styles.card}>
                        <div className={styles.card_title}>
                            <h3>{getDayOfWeek( item.date )} <br /> {item.date}</h3>
                        </div>
                        <div className={styles.img}>
                            <img src={`https://developer.foreca.com/static/images/symbols/${item.symbol}.png`} alt="symbol" className={styles.symbol}/>
                        </div>
                        <div className={styles.card_content}>
                            <div className={styles.card_content_item}>
                                <p className={styles.header_three}>{item.maxTemp}°C</p>
                                <p className={styles.header_three}>{item.minTemp}°C</p>
                            </div>
                            <div className={styles.card_desc}>
                                <p>{item.symbolPhrase}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

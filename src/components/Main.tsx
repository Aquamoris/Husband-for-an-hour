import React from 'react';
import styles from './Main.module.scss'
import { SiAdguard } from "react-icons/si";
import { FaTruck } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import main from '../assets/main.jpeg';

const Main:React.FC = () => {
    const data = [
        {name: 'Гарантия безопасности', img: <SiAdguard size={28} />},
        {name: 'Бесплатный выезд', img: <FaTruck size={28}/>},
        {name: 'Работы любой сложности', img: <FaTools size={28}/>},
        {name: 'Приезжаем в течение получаса', img: <FaClock size={28}/>},
    ]

    return (
        <section className={styles.wrapper}>
            <div className={styles.main__content}>
                <h1>
                    Мастер на час в вашем городе
                </h1>
                <ul className={styles.main__list}>
                    {
                        data.map(e => (
                            <li className={styles.main__list_item} key={e.name}>
                                {e.img} {e.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Main;
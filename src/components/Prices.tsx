import React from 'react';
import styles from './Prices.module.scss';

const Prices:React.FC = () => {
    const data = [
        {title: 'Вызов мастера на дом, выполнение замеров', price: 'бесплатно'},
        {title: 'Консультация по телефону', price: 'бесплатно'},
        {title: 'Минимальный заказ', price: '490 руб.'},
        {title: 'Мастер на час', price: 'от 200 руб.'},
        {title: 'Ремонт электрики', price: 'от 250 руб.'},
        {title: 'Установка/замена/ремонт сантехники', price: 'от 700 руб.'},
        {title: 'Сборка мебели', price: 'от 300 руб.'},
        {title: 'Отделочные работы', price: 'от 150 руб. кв/м'},
        {title: 'Плотницкие работы', price: 'от 150 руб.'},
        {title: 'Малярные работы', price: 'от 120 руб.'},
        {title: 'Закупка и доставка материала мастером', price: 'от 500 руб.'},
        {title: 'Покупка и доставка материалов транспортом компании', price: 'бесплатно'}
    ]

    return (
        <section className={styles.wrapper} id='prices'>
            <h2>Наши цены</h2>
            <ul className={styles.priceList}>
                <li className={`${styles.priceList__item} ${styles.priceList__header}`}>
                    <span>Услуга</span>
                    <span>Цена</span>
                </li>
                {
                    data.map(e => (
                        <li className={styles.priceList__item}>
                            <span>
                                {e.title}
                            </span>
                            <span>
                                {e.price}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Prices;
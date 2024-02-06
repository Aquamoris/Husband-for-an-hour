import React from 'react';
import styles from './Services.module.scss';
import ServiceItem from "./ServiceItem.tsx";
import electric from '../assets/services/electric.jpeg';
import sborka from '../assets/services/mebel.jpeg';
import santehnic from '../assets/services/santeh.jpeg';
import plotnic from '../assets/services/plotnic.jpeg';
import melkiyRemont from '../assets/services/melkiy-remont.jpeg';
import ustanovka from '../assets/services/ustanovka-tech.jpeg';

interface Props {
    setActive: (status: boolean) => void,
}

const Services:React.FC<Props> = ({ setActive }) => {
    const data = [
        {title: 'Услуги электрика', img: electric},
        {title: 'Сборка мебели', img: sborka},
        {title: 'Услуги сантехника', img: santehnic},
        {title: 'Услуги плотника', img: plotnic},
        {title: 'Мелкий ремонт', img: melkiyRemont},
        {title: 'Установка бытовой техники', img: ustanovka},
    ]


    return (
        <div className={styles.wrapper} id='services'>
            <h2>Наши услуги</h2>
            <section className={styles.grid}>
                { data.map(e => (<ServiceItem title={e.title} img={e.img} setActive={setActive} key={e.title}/>)) }
            </section>
        </div>
    );
};

export default Services;
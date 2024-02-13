import React from 'react';
import styles from './MapBlock.module.scss';
import mapImg from '../assets/map.png';
import SmallForm from "../modules/SmallForm.tsx";

const MapBlock:React.FC = () => {
    return (
        <section className={styles.wrapper}>
            <SmallForm />
            <h2 className={styles.info}>
                Приедем в любую точку вашего города + 25 км пригорода
            </h2>
            <div className={styles.mapWrapper}>
                <img src={mapImg} alt="Карта вашего города"/>
            </div>
        </section>
    );
};

export default MapBlock;
import React from 'react';
import styles from './MapBlock.module.scss';
import mapImg from '../assets/map.png';

const MapBlock:React.FC = () => {
    return (
        <section className={styles.wrapper}>
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
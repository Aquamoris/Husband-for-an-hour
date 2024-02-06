import React from 'react';
import styles from './Calculate.module.scss';

interface Props {
    setActive: (status: boolean) => void,
}

const Calculate:React.FC<Props> = ({ setActive }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.bgWrapper}>
                <h2>Рассчитать стоимость работ</h2>
                <h3>абсолютно бесплатно</h3>
                <button className={styles.button} onClick={() => setActive(true)}>Рассчитать</button>
            </div>
        </section>
    );
};

export default Calculate;
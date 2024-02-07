import React from 'react';
import styles from './Works.module.scss';
import work1 from '../assets/works/santech10.jpeg';
import work2 from '../assets/works/santech7.jpeg';
import work3 from '../assets/works/mebel31.jpeg';
import work4 from '../assets/works/elictric6.jpeg';

const Works:React.FC = () => {
    const data = [work1, work2, work3, work4];

    return (
        <section className={styles.wrapper} id='works'>
            <h2>Наши работы</h2>
            <ul className={styles.grid}>
                {
                    data.map(e => (
                        <li className={styles.grid__item} key={e}>
                            <img src={e} alt="Работа"/>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Works;
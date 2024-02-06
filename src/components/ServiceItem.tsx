import React from 'react';
import styles from './ServiceItem.module.scss';

interface Props {
    title: string,
    img: string,
    setActive: (status: boolean) => void,
}

const ServiceItem:React.FC<Props> = ({ title, img, setActive }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={img} alt={title}/>
            </div>
            <h3>{title}</h3>
            <button className='buttonForm' onClick={() => setActive(true)}>Заказать</button>
        </div>
    );
};

export default ServiceItem;
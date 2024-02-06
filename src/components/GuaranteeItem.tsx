import React from 'react';
import styles from './GuaranteeItem.module.scss';

interface Props {
    title: string,
    subtitle: string,
    image: string
}

const GuaranteeItem:React.FC<Props> = ({ title, subtitle, image }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={image} alt=""/>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    );
};

export default GuaranteeItem;
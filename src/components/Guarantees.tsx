import React from 'react';
import styles from './Guarantees.module.scss';
import lorry from '../assets/lorry.webp';
import guarantee from '../assets/kachestvo.jpeg';
import shop from '../assets/shop.jpeg';
import GuaranteeItem from "./GuaranteeItem.tsx";

const Guarantees:React.FC = () => {
    const data = [
        {title: 'Бесплатный выезд на дом', subtitle: 'В пределах города + 25 км', image: lorry},
        {title: 'Гарантия нашей работы', subtitle: '100% ответственность за нашу работу', image: guarantee},
        {title: 'Закупим нужные материалы', subtitle: 'У официального поставщика', image: shop},
    ]

    return (
        <section className={styles.wrapper}>
            <h2>Гарантии</h2>
            <ul className={styles.grid}>
                {
                    data.map(e => (
                        <GuaranteeItem title={e.title} subtitle={e.subtitle} image={e.image} key={e.title} />
                    ))
                }
            </ul>
        </section>
    );
};

export default Guarantees;
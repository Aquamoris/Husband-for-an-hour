import React from 'react';
import styles from './Header.module.scss';

interface Props {
    openForm: (status: boolean) => void
}

const Header:React.FC<Props> = ({ openForm }) => {
    return (
        <header>
            <nav>
                <h2>Мастер на час</h2>
                <a className={styles.link} href="#services">Услуги</a>
                <a className={styles.link} href="#prices">Цены</a>
                <a className={styles.link} href="#works">Работы</a>
                <div className={styles.contacts}>
                    <h2><a href='tel:89241233035'>+7 (924) 123-30-35</a></h2>
                    <button className={styles.button} onClick={() => openForm(true)}>
                        Оставить заявку
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
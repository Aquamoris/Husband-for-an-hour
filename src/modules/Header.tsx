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
                <a className={styles.link} href="#">Работы</a>
                <a className={styles.link} href="#prices">Цены</a>
                <a className={styles.link} href="#">Контакты</a>
                <div className={styles.contacts}>
                    <h2><a href='tel:89112223344'>+7 (911) 222-33-44</a></h2>
                    <button className={styles.button} onClick={() => openForm(true)}>
                        Оставить заявку
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
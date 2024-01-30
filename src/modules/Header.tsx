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
                <a href="#">Услуги</a>
                <a href="#">Работы</a>
                <a href="#">Цены</a>
                <a href="#">Контакты</a>
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
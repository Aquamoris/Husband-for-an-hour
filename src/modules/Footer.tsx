import React from 'react';
import styles from './Footer.module.scss';
import { IoCalendarSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer:React.FC = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <div>
                        <FaTools size={28}/>
                    </div>
                    <div>

                    </div>
                </div>
                <div className={styles.block}>
                    <div>
                        <IoCalendarSharp size={28}/>
                    </div>
                    <div>
                        Работаем ежедневно
                    </div>
                </div>
                <div className={styles.block} onClick={() => {window.scrollTo(0, 0)}}>
                    <div>
                        <FaArrowAltCircleUp size={28}/>
                    </div>
                    <div>
                        К началу сайта
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
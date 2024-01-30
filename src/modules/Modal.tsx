import React, {ReactNode} from 'react';
import './Modal.scss';
interface Props {
    active: boolean,
    setActive: (status: boolean) => void,
    children: ReactNode
}

const Modal:React.FC<Props> = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={'modal__content'} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
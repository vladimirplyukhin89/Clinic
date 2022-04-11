import s from './Modal.module.css';
import cn from 'classnames';

const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={cn(s.modal, { [s.active]: active })}
            onClick={() => setActive(false)}
        >
            <div
                className={cn(s.modal__content, { [s.active]: active })}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
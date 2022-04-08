import MedicalImage from '../medical_image/MedicalImage';
import s from './Card.module.css';

const Card = ({ title, text, ...rest }) => {
    return (
        <article className={s.container}>
            <div className={s.wrapper_card}>
                <MedicalImage
                    {...rest}
                />
                <h5 className={s.title}>{title}</h5>
                <p className={s.text}>{text}</p>
            </div>
        </article>
    );
};

export default Card;
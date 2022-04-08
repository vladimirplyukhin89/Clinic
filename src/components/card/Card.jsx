import MedicalImage from '../medical_image/MedicalImage';
import s from './Card.module.css';

const Card = ({ img, name, title, text }) => {
    return (
        <article className={s.container}>
            <div className={s.wrapper_card}>
                <MedicalImage
                    img={img}
                    name={name}
                />
                <h2 className={s.title}>{title}</h2>
                {/*<hr className={s.line} />*/}
                <p className={s.text}>{text}</p>
            </div>
        </article>
    );
};

export default Card;
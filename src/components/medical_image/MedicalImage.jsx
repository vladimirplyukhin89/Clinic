import s from './MedicalImage.module.css';

const MedicalImage = ({ img, name }) => {
    console.log(img, name);
    return (
        <div className={s.wrapper_image}>
            <img
                src={img}
                alt={name}
                className={s.medical_image}
            />
        </div>
    );
};

export default MedicalImage;
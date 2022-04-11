import s from './Button.module.css';

const Button = ({
    type,
    text,
    color,
    colorBg,
    margin,
    disabled,
    changeModal = f => f
}) => {
    // Стили для кнопки
    const sectionStyle = {};
    if (color) {
        sectionStyle.color = color;
    }
    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }
    if (margin) {
        sectionStyle.marginRight = margin;
    }

    return (
        <div className={s.wrapper}>
            {
                text && <button
                    type={type}
                    style={sectionStyle}
                    className={s.btn}
                    disabled={disabled}
                    onClick={changeModal}
                >{text}
                </button>
            }
        </div>
    );
};

export default Button;
import s from './Button.module.css';

const Button = ({ type, text, color, colorBg, margin }) => {
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
                >{text}
                </button>
            }
        </div>
    );
};

export default Button;
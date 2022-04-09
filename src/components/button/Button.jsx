import s from './Button.module.css';

const Button = ({ text, color, colorBg }) => {
    const sectionStyle = {};
    if (color) {
        sectionStyle.color = color;
    }
    if (colorBg) {
        sectionStyle.backgroundColor = colorBg;
    }

    return (
        <div className={s.wrapper}>
            {
                text && <button
                    style={sectionStyle}
                    className={s.btn}
                >{text}
                </button>
            }
        </div>
    );
};

export default Button;
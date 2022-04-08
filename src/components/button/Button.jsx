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
        <button
            style={sectionStyle}
            className={s.btn}
        >{text}
        </button>
    );
};

export default Button;
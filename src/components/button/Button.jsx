import s from './Button.module.css';
import cn from 'classnames';

const Button = ({
    type,
    text,
    color,
    colorBg,
    margin,
    disabled,
    active,
    setActive
}) => {
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
                    disabled={disabled}
                    type={type}
                    style={sectionStyle}
                    className={s.btn}
                //onClick={setActive((prev) => !prev)}
                //className={cn(s.btn, { [s.active]: active })}
                >{text}
                </button>
            }
        </div>
    );
};

export default Button;
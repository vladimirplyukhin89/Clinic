import s from './Title.module.css';

const Title = ({
    title,
    fontSize,
    lineHeight,
    marginTop,
    padding
}) => {
    // Стили тайтла
    const sectionStyle = {};
    if (fontSize) {
        sectionStyle.fontSize = fontSize;
    }
    if (lineHeight) {
        sectionStyle.lineHeight = lineHeight;
    }
    if (marginTop) {
        sectionStyle.marginTop = marginTop;
    }
    if (padding) {
        sectionStyle.padding = padding;
    }

    return title && <h1
        className={s.title}
        style={sectionStyle}
    >{title}</h1>
};

export default Title;
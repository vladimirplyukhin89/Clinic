import s from './Title.module.css';

const Title = ({ title }) => {
    return title && <h1 className={s.title}>{title}</h1>
};

export default Title;
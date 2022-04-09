import s from './WrapperCards.module.css';
import Card from '../card/Card';

import medHistoryImg from '../../image/medical-history.svg';
import medHeartImg from '../../image/heart.svg';
import medToolsImg from '../../image/med-tools.svg';

const WrapperCards = () => {
    return (
        <div className={s.wrapper_cards}>
            <Card
                title='Лечение рака'
                img={medHistoryImg}
                name='medical-icon'
                text='Рыба текст'
            />
            <Card
                title='Онлайн-прием'
                img={medHeartImg}
                name='medical-icon'
                text='Рыба текст'
            />
            <Card
                title='Экстренный Случай'
                img={medToolsImg}
                name='medical-icon'
                text='Ещё одна рыба текст'
            />
        </div>
    );
};

export default WrapperCards;
import s from './Main.module.css';
import Button from '../button/Button';
import Card from '../card/Card';
import medHistoryImg from '../../image/medical-history.svg';
import medHeartImg from '../../image/heart.svg';
import medToolsImg from '../../image/med-tools.svg';

const Main = () => {
    return (
        <main>
            <section className={s.container}>
                <div className={s.wrapper_welcoming}>
                    <h1 className={s.title}>Место для получения медицинской помощи</h1>
                    <Button
                        text='Войти'
                        color='rgba(255, 255, 255, 1)'
                        colorBg='rgba(255, 104, 91, 1)'
                    />
                    <Button
                        text='Контакты'
                        color='rgba(255, 104, 91, 1)'
                        colorBg='rgba(255, 255, 255, 1)'
                    />
                </div>
                <Card
                    title='Лечение рака'
                    img={medHistoryImg}
                    name='medical-icon'
                    text='Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa'
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
            </section>
        </main>
    );
};

export default Main;
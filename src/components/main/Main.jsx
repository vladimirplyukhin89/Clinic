import Title from '../title/Title';
import Button from '../button/Button';
import WrapperCards from '../wrapper_cards/WrapperCards';

import s from './Main.module.css';

const Main = () => {
    return (
        <main>
            <section className={s.container}>
                <Title
                    title='Место для получения медицинской помощи'
                />
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
                <WrapperCards />
            </section>
        </main>
    );
};

export default Main;
import { useOutletContext } from "react-router-dom";
import Title from '../components/title/Title';
import Button from '../components/button/Button';
import WrapperCards from '../components/wrapper_cards/WrapperCards';
import Form from '../components/form_registration/Form'
import Modal from '../components/modal/Modal';

const Home = () => {
    const [modalActive, setModalActive] = useOutletContext();

    const turnModal = (prev) => setModalActive(prev)

    return (
        <>
            <section>
                <Title
                    title='Место для получения медицинской помощи'
                />
                <Button
                    type='text'
                    text='Войти'
                    color='rgba(255, 255, 255, 1)'
                    colorBg='rgba(255, 104, 91, 1)'
                    margin='10px'
                    changeModal={turnModal}
                />
                <Button
                    type='text'
                    text='Контакты'
                    color='rgba(255, 104, 91, 1)'
                    colorBg='rgba(255, 255, 255, 1)'
                />
                <WrapperCards />
                <Modal active={modalActive} setActive={setModalActive}>
                    <Form active={modalActive} setActive={setModalActive} />
                </Modal>
            </section>
        </>
    );
};

export default Home;
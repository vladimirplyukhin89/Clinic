import { useOutletContext } from "react-router-dom";
import Form from "../components/loginForm/loginForm";
import Modal from "../components/modal/Modal";
import Title from "../components/title/Title";


const Contacts = () => {
    const [modalActive, setModalActive] = useOutletContext();

    return (
        <>
            <Title
                title='Контакты'
                fontSize='58px'
                lineHeight='80px'
                marginTop='184px'
                padding='0'
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <Form active={modalActive} setActive={setModalActive} />
            </Modal>
        </>
    );
};

export default Contacts;
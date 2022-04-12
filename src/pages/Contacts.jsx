import { useOutletContext } from "react-router-dom";
import Form from "../components/form_registration/Form";
import Modal from "../components/modal/Modal";

const Contacts = () => {
    const [modalActive, setModalActive] = useOutletContext();

    return (
        <>
            <h1>This is  Contacts page</h1>
            <Modal active={modalActive} setActive={setModalActive}>
                <Form active={modalActive} setActive={setModalActive} />
            </Modal>
        </>
    );
};

export default Contacts;
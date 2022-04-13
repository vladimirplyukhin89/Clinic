import { useOutletContext, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/useAuth';
import Button from '../components/button/Button';

const Profile = () => {
    const [modalActive, setModalActive] = useOutletContext();
    let { user, signout } = useAuth();
    let navigate = useNavigate();

    if (!user) {
        return <p>Вы не вошли в личный кабинет.</p>
    }

    const handleOnClick = () => {
        if (user) {
            signout(() => navigate('/', { replace: true }));
        } else {
            setModalActive(true);
        }
    };

    return (
        <>
            <div
                style={{
                    marginTop: '141px',
                }}>
                <h1
                    style={{
                        color: 'var(--colors-t-main)',
                        fontSize: '58px',
                        fontWeight: 'var(--fw-bold)',
                        marginBottom: '35px',
                        lineHeight: '80px'
                    }}
                >Привет, {user.name}</h1>
                <Button
                    type='text'
                    text='Выйти из аккаунта'
                    color='var(--colors-bg)'
                    colorBg='var(--colors-t-first)'
                    margin='10px'
                    handler={handleOnClick}
                />
                <Button
                    type='text'
                    text='Перейти в контакты'
                    color='rgba(255, 104, 91, 1)'
                    colorBg='rgba(255, 255, 255, 1)'
                    handler={() => navigate('/contacts', { replace: true })}
                />
            </div>
        </>
    );
};
export default Profile;

import { logout } from '../../services/auth';
const Logout = () => {

    const handleLogout = () => {
        logout(); 
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;

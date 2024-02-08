import Header from './header/header';
import RodaPe from './rodaPe/RodaPe';


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <RodaPe/>
        </div>
    );
}

export default Layout;

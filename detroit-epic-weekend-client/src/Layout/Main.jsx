import { Outlet} from 'react-router-dom';
import NavBar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    // const location = useLocation();
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {/* {noHeaderFooter || <Navbar></Navbar>} */}
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* {noHeaderFooter || <Footer></Footer>} */}
        </div>
    );
};

export default Main;
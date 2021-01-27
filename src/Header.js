import './Web.css';
import Menu from './Menu';
import Logo from './images/image.png';
function Header(){
    return (
        <nav class="navbar navbar-expand-sm bg-danger navbar-dark">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3">
                        <img class="logo" src={Logo}></img>
                    </div>
                    <div class="col-lg-8 text-white">
                        <div class="navbar-collapse collapse justify-content-center order-2">
                            <ul class="navbar-nav">
                                <Menu link="HOME"/>
                                <Menu link="HERBALIFE"/>
                                <Menu link = "STORE"/>
                                <Menu link = "GALLERY"/>
                                <Menu link = "BLOG"/>
                                <Menu link = "CONTACT US"/>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="#" class="fa fa-facebook"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="fa fa-youtube"></a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="fa fa-linkedin"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;
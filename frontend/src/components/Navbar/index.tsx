import { ReactComponent as Githubicon } from 'assets/img/Vector.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Gttolla">
                        <div className="dsmovie-contact-container">
                            <Githubicon />
                            <p>/Gttolla</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
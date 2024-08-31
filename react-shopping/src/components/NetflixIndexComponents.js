import './NetflixIndexComponents.css';
import NetflixHeaderComponent from './NetflixHeaderComponents';
import NetflixMainComponents from './NetflixMainComponents';
import NetflixRegisterComponents from './NetflixRegisterComponents';
import NetflixFooterComponents from './NetflixFooterComponents';

export default function NetflixIndexComponents() 
{
    return (
        <div className="container-fluid">
            <div className="box">
            <header>
                <NetflixHeaderComponent />
            </header>
            <section>
            <main>
                <NetflixMainComponents />
                <NetflixRegisterComponents />
            </main>
            </section>
            <footer className="m-2 p-2">
                <NetflixFooterComponents />
            </footer>
            </div>
        </div>
    );
}
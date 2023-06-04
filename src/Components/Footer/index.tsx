import "./Footer.css";

import baner from  "../../assets/banner.png"


const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <img src={baner} alt='Logo principal da página' />
                <h5>
                    Pedro Vinicius | <a href="https://www.linkedin.com/in/pedro-vinicius-dev/">LinkedIn</a> | 
                     <a href="https://github.com/PedroVMB"> Github</a>
                    <br />
                    &copy; PedroVMB. Todos os direitos reservados.
                </h5>
            </div>
        </footer>
    );
};


export default Footer;
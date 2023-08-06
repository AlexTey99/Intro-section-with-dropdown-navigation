// @ts-ignore
import logo from "../assets/images/logo.svg";

import {Button} from "../components/Buttom";



const Header = () => {

    // Funcion para mostrar la ventana emergente con sus obciones
    const Feactures = () => {

        let div = document.getElementById("PopUpWindowFeactures");
        
        // Comprobar el valor actual de display del div
        let currentDisplay = div.style.display;
        
        // Alternar entre "flex" y "none"
        if (currentDisplay === "flex") {
          div.style.display = "none";
        } else {
          div.style.display = "flex";
        }
           
        const arrowFeactures = document.getElementById('arrowFeactures');
       
        arrowFeactures.classList.toggle('arrow-vertical');
        arrowFeactures.classList.toggle('arrow-horizontal'); 
    }

    const Company = () => {

        let div = document.getElementById('popUpWindowCompany')
        let currentDisplay = div.style.display;

        if (currentDisplay ==="flex") {
            div.style.display = "none";
        } else {
            div.style.display = "flex";
        }

        const arrowCompany = document.getElementById('arrowCompany');
       
        arrowCompany.classList.toggle('arrow-vertical');
        arrowCompany.classList.toggle('arrow-horizontal');
    }

    
    return(
        <div className="header">
            <img className="snap-logo" src={logo} alt=""  />

            <Button id="Feactures" text="Features" classname="left-button-header" onClick={Feactures}/>
            <i id="arrowFeactures" className="fa-sharp fa-solid fa-chevron-up arrow-horizontal arrow-vertical"></i>
            <Button id="Company" text="Company" classname="left-button-header" onClick={Company}/>
            <i id="arrowCompany" className="fa-sharp fa-solid fa-chevron-up arrow-horizontal arrow-vertical"></i>

            <Button text="Carees" classname="left-button-header"/>
            <Button text="About" classname="left-button-header"/>

            <div className="login-container">
                <Button text="Login" classname="login-button"/>
                <Button text="Register" classname="register-button"/>
            </div>
        </div>
    );
};

export {Header};
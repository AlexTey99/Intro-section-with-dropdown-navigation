// @ts-ignore
import logo from "../assets/images/logo.svg";
import {Button} from "../components/Buttom";

const Header = () => {

    const loginButtonMessaje = () =>{
        console.log("Button de login");
    }

    const registerButtonMessaje = () =>{
        console.log("Button register");
    }

    const Feactures = () => {
        const arrowElement = document.getElementById('arrowFeactures');

        arrowElement.addEventListener('click', () => {
        arrowElement.classList.toggle('arrow-horizontal');
        arrowElement.classList.toggle('arrow-vertical');
        });

    }

    
    return(
        <div className="header">
            <img className="snap-logo" src={logo} alt=""  />

            <Button id="Feactures" text="Features" classname="left-button-header" onClick={Feactures}/>
            <i id="arrowFeactures" className="fa-sharp fa-solid fa-chevron-up arrow-horizontal arrow-vertical"></i>
            <Button id="Company" text="Company" classname="left-button-header"/>
            <i id="arrowCompany" className="fa-sharp fa-solid fa-chevron-up arrow-horizontal arrow-vertical"></i>

            <Button text="Carees" classname="left-button-header"/>
            <Button text="About" classname="left-button-header"/>

            <div className="login-container">
                <Button text="Login" classname="login-button" onClick={loginButtonMessaje}/>
                <Button text="Register" classname="register-button" onClick={registerButtonMessaje}/>
            </div>
        </div>
    );
};

export {Header};
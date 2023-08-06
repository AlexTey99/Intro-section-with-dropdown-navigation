// @ts-ignore
import image from "../assets/images/image-hero-desktop.png";
// @ts-ignore
import databiz from "../assets/images/client-databiz.svg";
// @ts-ignore
import audioPine from "../assets/images/client-audiophile.svg";
// @ts-ignore
import meet from "../assets/images/client-meet.svg";
// @ts-ignore
import maker from "../assets/images/client-maker.svg";
import {Button} from "../components/Buttom";
import {PopUpWindow} from "../components/popUpWindowFeactures";
import { Company } from "../components/popUpWindowCompany";



const ContainerCentral = () => {

    const learnMoreButtonMessaje = () =>{
        console.log("Learn More Button register");
    }

    return (
        <div className="container-central">
            <div className="text-left-container">
                <h1>Make remote Work</h1>
                <p> Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>
                <br />
                <Button text="Learn more" classname="Learn-buttom" onClick={learnMoreButtonMessaje}/>
                <div className="icons-container">
                    <img className="icons" src={databiz} alt="" />
                    <img className="icons" src={audioPine} alt="" />
                    <img className="icons" src={meet} alt="" />
                    <img className="icons" src={maker} alt="" />

                </div>
                
            </div>
            <img className="image-rigth" src={image} alt="" />

            <PopUpWindow />
            <Company />
            
        </div>
    );
};

export {ContainerCentral};
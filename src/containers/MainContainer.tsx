import { Header } from "../components/Header";
import { ContainerCentral } from "./ContainerCentral"

const MainContainer =()=>{

    return(
        <div className="mainContainer">
            <Header />
            <ContainerCentral />
        </div>
    );
};

export { MainContainer };
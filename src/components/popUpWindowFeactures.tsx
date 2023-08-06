
// @ts-ignore
import TodoList from "../assets/images/icon-todo.svg"
//@ts-ignore
import calendar from "../assets/images/icon-calendar.svg"
//@ts-ignore
import Remiders from "../assets/images/icon-reminders.svg"
//@ts-ignore
import Planning from "../assets/images/icon-planning.svg"




const PopUpWindow = () => {
    return(
        <div id="PopUpWindowFeactures" className="PopUpWindow-Feactures">
            <div className="Todo-List all">
                <img src= {TodoList} alt="" />
                <p>Todo List</p>
            </div>
            <div className="Calendar all">
                <img src={calendar} alt="" />
                <p>Calendar</p>
            </div>
            <div className="Reminders all">
                <img src={Remiders} alt="" />
                <p>Remiders</p>
            </div>
            <div className="planning all">
                <img src={Planning} alt="" />
                <p>Planning</p>
            </div>
        </div>
    );
};

export {PopUpWindow};

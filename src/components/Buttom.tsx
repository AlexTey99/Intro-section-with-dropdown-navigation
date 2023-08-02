

const Button = ({ text, classname, onClick, id }: IProps) => {
    return(
        <button id={id} className = {classname} onClick={onClick}>{text}</button>
    );
} ;

type IProps = {
    text: string;
    classname?: string;
    onClick?: () => void;
    id?: string;
};

export {Button};
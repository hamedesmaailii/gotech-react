type ButtonProps = {
    text: string;
    color?: 'primary' | 'secondary';
    outline?: boolean;
}

const Button : React.FC<ButtonProps> = ({text, color = 'primary',outline}) => {
    let colorClass = '';
    if('primary' === color){
        colorClass = 'bg-linear-to-tr from-primary-gradient-start to-primary-gradient-end transition duration-300 hover:bg-gradient-to-l';
    } else if('secondary' === color){
        colorClass = 'bg-secondary';
    }

    let buttonClass = `flex items-center justify-center px-[32px] py-[12px] border border-solid border-white rounded-[4px] text-small text-white hover:cursor-pointer`;

    if (outline) {
        colorClass = '';
        buttonClass += ' border border-solid !border-primary !text-primary transition duration-250 ease-all hover:bg-primary hover:!text-white'
    }
    return <button type="button" className={buttonClass + ' ' + colorClass}>{text}</button>
}   

export default Button;
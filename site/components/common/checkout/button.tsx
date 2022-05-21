interface ButtonProps {
    text: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Button = (props: ButtonProps) => {
    return (
        <div
            className="flex cursor-pointer  bg-[#F1F1F1] w-[100%] lg:w-[490px] h-[40px] text-[#161616] text-[1rem] pl-4 items-center font-semibold "
            onClick={props.onClick}
        >
            {props.text}
        </div>
    )
}

export default Button
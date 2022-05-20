
interface FormButtonProps {
    text: string
}
const FormButton = (props: FormButtonProps) => {
    return (
        <button type="submit" className="flex cursor-pointer bg-[#70877B] w-[100%] h-[40px] text-[#FFFFFF] text-[0.7rem] sm:text-[1rem] items-center justify-center font-semibold ">
            {props.text}
        </button>
    )
}


export default FormButton
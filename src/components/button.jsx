export default function Button({borderColor, textColor,type="", disabled=false, onClick, children}) {
    return(
        <button type={type} disabled={disabled} onClick={onClick} className={`w-[191px] h-[49px] border-[3px] border-[${borderColor}] text-[${textColor}] bg-primary bg-opacity-40 mt-[30px] font-semibold rounded-2xl hover:bg-opacity-80 hover:bg-[${borderColor}] hover:text-white`}>{children}</button>
    )
}
export default function Button({borderColor, textColor,type="", disabled=false, onClick, children}) {
    return(
        <button type={type} disabled={disabled} onClick={onClick} className={`w-[191px] h-[49px] border-[3px] border-[${borderColor}] text-[${textColor}] bg-primary bg-opacity-40 hover:bg-opacity-0 mt-[30px] font-semibold rounded-2xl hover:bg-[${borderColor}]`}>{children}</button>
    )
}
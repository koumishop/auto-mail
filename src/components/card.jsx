export default function Card({children}) {
    return(
        <div className="md:w-[230px] md:h-[259px] mx-4 mb-8 flex flex-col items-center justify-start rounded-2xl bg-white shadow-md">
            {children}
        </div>
    )
}
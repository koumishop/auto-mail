
export default function Card({title, children}) {

    return(
        <div className="w-[190px] h-[213px] lg:w-[180px] mx-0.5 md:ml-3 mb-4 flex flex-col items-center justify-start rounded-2xl bg-white shadow-md hover:scale-105">
            {children}
            {/* <div
                ref={animationRef}
                onMouseEnter={() => webLottie.play(`${animationRef}`)}
                onMouseLeave={() => webLottie.pause(`${animationRef}`)}
                className="mt-5 mb-2 w-[85px] h-[85px]"
              /> */}
            <h3 className="text-[#343E61] w-[160px] px-5 md:px-0 mb-8 text-base font-semibold">
                {title}
            </h3>
        </div>
    )
}
function Button(props) {
    return (
        <button
            className={`heding-10 border border-[#666666] rounded-[8px] w-[310px] sm:w-[180px] h-[49px]
            flex justify-center items-center gap-2 mt-7 hover:bg-[#1A1A1A] cursor-pointer
            ${props.className || ""}`}>
            <p>{props.name}</p>
            {props.img && (
                <img
                    src={props.img}
                    alt="icon"
                    className="size-[13.5px] object-contain"
                />
            )}
        </button>
    )
}
export default Button

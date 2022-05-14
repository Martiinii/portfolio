const Breaker = ({color = "border-neutral-400", className}) => {
    return (
        <hr className={`${color} ${className ?? ""}`}/>
    )
}

export default Breaker;
const Breaker = ({color = "border-neutral-400 dark:border-slate-600", className}) => {
    return (
        <hr className={`${color} ${className ?? ""}`}/>
    )
}

export default Breaker;
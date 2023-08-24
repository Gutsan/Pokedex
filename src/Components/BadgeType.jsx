export const BadgeType=({type, color})=>{
    const FORMAT_CLASS=`w-16 h-6 rounded-xl ${color} flex items-center justify-center hover:opacity-80 cursor-pointer`
    return(
    <div className={FORMAT_CLASS}>
        <p className="max-w-fit p-0 m-0">{type}</p>
    </div>
    )
}
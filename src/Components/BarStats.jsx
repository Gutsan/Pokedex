export const BarStats=({name,value,color})=>{
const BACKGROUND_FILL=`bg-${color}`
const BACKGROUND_EMPTY="bg-gray-600"

const CLASSNAME_1=`w-4 h-4 border border-black rounded ${value>0?BACKGROUND_FILL:BACKGROUND_EMPTY}`
const CLASSNAME_2=`w-4 h-4 border border-black rounded  ${value>30?BACKGROUND_FILL:BACKGROUND_EMPTY}`
const CLASSNAME_3=`w-4 h-4 border border-black rounded  ${value>60?BACKGROUND_FILL:BACKGROUND_EMPTY}`
const CLASSNAME_4=`w-4 h-4 border border-black rounded  ${value>90?BACKGROUND_FILL:BACKGROUND_EMPTY}`
const CLASSNAME_5=`w-4 h-4 border border-black rounded  ${value>120?BACKGROUND_FILL:BACKGROUND_EMPTY}`

    return(
    <div className="w-1/2 flex gap-2 items-center justify-between text-white">
        <p>{name}</p>
        <div className="flex gap-2">
        <div className={CLASSNAME_1}></div>
        <div className={CLASSNAME_2}></div>
        <div className={CLASSNAME_3}></div>
        <div className={CLASSNAME_4}></div>
        <div className={CLASSNAME_5}></div>
</div>
    </div>
    
)
}
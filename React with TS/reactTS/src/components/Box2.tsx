import{ Dispatch,SetStateAction }from "react"

// interface PropType{
//     heading: string;
//     count?: number;
//     children: ReactNode;
// }
type InputValType=string|number;

function Box2 <T extends InputValType> ({label,value,setter}:{label: string, value:T,setter:Dispatch<SetStateAction<T>>}) {
  return (
    <div>
     <form>
        <label htmlFor="">{label}</label>
        <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)} />
        <button>click</button>
     </form>
    </div>
  )
}

export default Box2

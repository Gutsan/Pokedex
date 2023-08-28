import { IconPokeball } from '@tabler/icons-react';


export const Header=()=>{
    return(
    <header className="z-50 h-16 w-full sticky top-0 left-0 right-0 flex justify-center items-center tracking-widest bg-slate-800">
        <div className=''>             
            <p className='flex g-5 text-2xl items-center text-slate-400'>P<IconPokeball className='text-red-600'/>  KEDEX</p>
            </div>
    </header>
    )
}

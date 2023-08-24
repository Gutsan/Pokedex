import { IconPokeball } from '@tabler/icons-react';


export const Header=()=>{
    return(
    <header className="h-16 w-full flex justify-center items-center tracking-widest ">
        <div className=''>             
            <p className='flex g-5 text-2xl items-center text-blue-800'>P<IconPokeball className='text-red-600'/>  KEDEX</p>
            </div>
    </header>
    )
}

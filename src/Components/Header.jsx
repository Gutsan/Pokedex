import { IconPokeball } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

export const Header=()=>{
    return(
    <header className="z-50 
                    h-16 w-full px-5 box-border
                    sticky top-0 left-0 right-0 
                    flex justify-between items-center 
                    tracking-widest text-red-500
                    bg-slate-800
                    ">
        <div className=''>             
            <p className='flex g-5 text-2xl items-center text-slate-400'>P<IconPokeball className='text-red-600'/>  KEDEX</p>
        </div>
        <nav className='flex justify-between gap-5'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Pokemon">Pokemon</NavLink>
        </nav>
    </header>
    )
}

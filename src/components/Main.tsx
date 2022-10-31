import { FC, useContext } from 'react';
import { AppContext } from '../context/context';
import { INote } from '../types/INote';
import { MainBtns } from './UI/MainBtns';
import { MainNote } from './UI/Note';

interface MainProps {
    defaultNote: INote
}

export const Main: FC<MainProps> = ({defaultNote}) => {
    const context = useContext(AppContext);
    
    return (
        <>
        <div className='main'>
            <MainNote note={context ? context.currentNote : defaultNote}/>
        </div>
        <MainBtns />
        </>
    )
}

import { FC, useContext } from 'react';
import { AppContext } from '../context/context';
import { INote } from '../types/INote';
import { SMain } from './styledComponents/SMain';
import { MainBtns } from './UI/MainBtns';
import { MainNote } from './UI/Note';

interface MainProps {
    defaultNote: INote
}

export const Main: FC<MainProps> = ({defaultNote}) => {
    const context = useContext(AppContext);
    
    return (
        <>
        <SMain>
            <MainNote note={context ? context.currentNote : defaultNote}/>
        </SMain>
        <MainBtns />
        </>
    )
}

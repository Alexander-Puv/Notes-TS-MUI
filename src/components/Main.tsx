import React from 'react';
import { MainBtns } from './UI/MainBtns';
import { MainNote } from './UI/Note';
import { SMain } from './styledComponents/SMain';

export const Main = () => {
    
    return (
        <>
        <SMain>
            <MainNote />
        </SMain>
        <MainBtns />
        </>
    )
}

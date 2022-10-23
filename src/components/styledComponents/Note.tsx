import { styled } from '@mui/material';
import { FC } from 'react';

//var(--mui-palette-text-primary)

const NoteBody = styled('div')(({ theme }) => ({
    borderRadius: 0,
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundImage: 'none',
    color: theme.typography.body1.color,
    '&.chosen': {
        backgroundImage: 'var(--mui-overlays-1)',
    },
}))

const Header = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.h3.fontWeight,
    marginBottom: 5
}))

const Content = styled('div')(() => ({
    display: 'flex',
    gap: 10
}))

const Time = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
}))

const Text = styled('div')(({ theme }) => ({
    fontFamily: theme.typography.h1.fontFamily,
}))

interface NoteParams {
    header: string,
    text: string,
    time: Date,
    chosen?: boolean
}

export const Note: FC<NoteParams> = ({header, text, time, chosen = false}) => {
    const currentTime = time.toLocaleTimeString();
    const currentDate = time.toLocaleDateString();

    return (
        <NoteBody className={chosen ? 'chosen' : ''}>
            <Header>{header}</Header>
            <Content>
                <Time>{time.getDate() === new Date().getDate() ? currentTime : currentDate}</Time>
                <Text>{text}</Text>
            </Content>
        </NoteBody>
    )
}
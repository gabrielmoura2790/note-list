import React, { useState } from 'react';
import {
    Container,
    List,
} from './styles';

import NoteList from '../NoteList';

export default function Body() {
    const [note, setNote] = useState([
        { key: 1, title: "teste1"},
        { key: 2, title: "teste2"},
        { key: 3, title: "teste3"}
    ]);
    
    return (
        <Container>
            <List
                showsVerticalScrollIndicator={false}
                data={note}
                renderItem={({ item }) => <NoteList data={item}/>}
            />
        </Container>
    );
}
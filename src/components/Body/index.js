import React, { useState, useEffect } from 'react';
import {
    Container,
    List,
} from './styles';
import firestore from '@react-native-firebase/firestore';

import NoteList from '../NoteList';

export default function Body() {
    const [note, setNote] = useState([]);

    useEffect(() => {
        const response = firestore()
            .collection('notes')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setNote([]);

                snapshot.forEach(doc => {
                    const list = {
                        id: doc.id,
                        ...doc.data(),
                    }
                    setNote(oldArray => [...oldArray, list]);
                });
            })

        return () => response();

    }, []);

    return (
        <Container>
            <List
                showsVerticalScrollIndicator={false}
                data={note}
                renderItem={({ item }) => <NoteList data={item} />}
            />
        </Container>
    );
}
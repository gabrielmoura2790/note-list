import React, { useState, useEffect } from 'react';
import {
    Container,
    List,
} from './styles';
import firestore from '@react-native-firebase/firestore';

import NoteList from '../NoteList';
import { ActivityIndicator, View, Text, Alert } from 'react-native';

export default function Body() {
    const [note, setNote] = useState([]);
    const [loading, setLoading] = useState(true);

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
                    setLoading(false);
                    setNote(oldArray => [...oldArray, list]);
                });
            })

        return () => response();

    }, []);

    function handleDelete(data) {
        Alert.alert(
            'ATENÇÃO!',
            `Você realmente deseja excluir a anotação: ${data.content} ?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Excluir',
                    onPress: () => handleDeleteSuccess(data)
                }
            ]
        )
    }

    async function handleDeleteSuccess(data) {
        await firestore().collection('notes').doc(data.id).delete()
    }

    return (
        <Container>
            {
                loading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {
                            note ? (
                                <Text>Nenhuma nota adicionada...</Text>
                            ) : (
                                <ActivityIndicator size="large" color="#20e809" />
                            )
                        }
                    </View>
                ) :
                    (
                        <List
                            showsVerticalScrollIndicator={false}
                            data={note}
                            renderItem={({ item }) => <NoteList data={item} deleteItem={handleDelete} />}
                        />
                    )
            }
        </Container>
    );
}
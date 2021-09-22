import React from 'react';
import { Container } from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function AddNote() {
    return (
        <Container activeOpacity={0.85} onPress={() => alert("TESTE")}>
            <Icon
                name="plus"
                size={38}
                color="#FFF"
            />
        </Container>
    );
}
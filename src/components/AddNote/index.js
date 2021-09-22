import React from 'react';
import { Container } from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function AddNote(props) {
    return (
        <Container activeOpacity={0.85} onPress={props.open}>
            <Icon
                name="plus"
                size={38}
                color="#FFF"
            />
        </Container>
    );
}
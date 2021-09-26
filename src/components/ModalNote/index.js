import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Container,
  Input,
  ModalView,
  ButtonRow,
  Button,
  TextButton,
} from './styles';

export default function ModalNote(props) {
  const [note, setNote] = useState('');

  async function handleAddNote(props) {
    if (note === '') {
      console.log("Nota vazia!");
      return;
    }

    await firestore().collection('notes')
      .add({
        content: note,
        select: false,
        created: new Date(),
      })
      .then(() => {
        setNote('');
        console.log("Nota criada com sucesso!");
        props.close();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <ModalView>
        <Input
          placeholder="Qual a sua anotação?"
          value={note}
          onChangeText={setNote}
        />

        <ButtonRow>

          <Button onPress={props.close}>
            <TextButton style={{ fontSize: 17 }}>
              cancelar
            </TextButton>
          </Button>

          <Button style={{ backgroundColor: "#20e809" }} onPress={() => handleAddNote(props)}>
            <TextButton style={{ fontSize: 22, fontWeight: "bold", color: "#FFF" }}>
              Adicionar
            </TextButton>
          </Button>

        </ButtonRow>

      </ModalView>
    </Container>
  );
}
import React, { useState } from 'react';
import {
  Container,
  Input,
  ModalView,
  ButtonRow,
  Button,
  TextButton,
} from './styles';

export default function ModalNote(props) {
  return (
    <Container>
      <ModalView>
        <Input placeholder="Qual a sua anotação?" />

        <ButtonRow>

          <Button onPress={props.close}>
            <TextButton style={{ fontSize: 17 }}>
              cancelar
            </TextButton>
          </Button>

          <Button style={{ backgroundColor: "#20e809" }}>
            <TextButton style={{ fontSize: 22, fontWeight: "bold", color: "#FFF" }}>
              Adicionar
            </TextButton>
          </Button>

        </ButtonRow>

      </ModalView>
    </Container>
  );
}
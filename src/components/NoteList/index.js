import React, { useState } from 'react';
import { Container, Text, MarkButton, Ratio } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NoteList() {
  const [select, setSelect] = useState(false);

  function handleSelect() {
    setSelect(!select);
  }

  return (
    <Container>
      <Text numberOfLines={2} style={{ textDecorationLine: select ? "line-through" : "none", color: select ? "#808080" : "#000" }}>Apenas um teste</Text>
      <MarkButton onPress={handleSelect} >
        <Ratio style={{ borderColor: select ? "#20e809" : "#DDD" }}>
          {
            select ?
              (
                <Icon
                  name="map-marker"
                  size={17}
                  color={"#20e809"}
                />
              ) :
              (
                <Container />
              )
          }

        </Ratio>
      </MarkButton>
    </Container>
  );
}
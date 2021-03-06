import React from 'react';
import { Container, Text, MarkButton, Ratio } from './styles';
import { View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NoteList({ data, deleteItem }) {

  async function toggleSelect(id, select) {

    await firestore().collection('notes')
      .doc(id).update({
        select: !select,
      })
  }

  return (
    <Container onLongPress={() => deleteItem(data)} activeOpacity={1}>
      <Text
        numberOfLines={2}
        style={{ textDecorationLine: data.select ? "line-through" : "none", color: data.select ? "#808080" : "#000" }}>
        {data.content}
      </Text>

      <MarkButton onPress={() => toggleSelect(data.id, data.select)} >
        <Ratio style={{ borderColor: data.select ? "#20e809" : "#DDD" }}>
          {
            data.select ?
              (
                <Icon
                  name="map-marker"
                  size={17}
                  color={"#20e809"}
                />
              ) :
              (
                <View />
              )
          }

        </Ratio>
      </MarkButton>

    </Container>
  );
}
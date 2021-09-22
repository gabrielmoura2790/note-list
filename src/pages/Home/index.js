import React from 'react';
import {
  Container,
} from './styles';

import Header from '../../components/Header';
import Body from '../../components/Body';
import AddNote from '../../components/AddNote';

export default function Home() {
  return (
    <Container>
      <Header />
      <Body />
      <AddNote />
    </Container>
  );
}
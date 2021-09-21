import React from 'react';
import { 
    Container,
} from './styles';

import Header from '../../components/Header';
import Body from '../../components/Body';

export default function Home() {
 return (
   <Container>
       <Header />
       <Body />
   </Container>
  );
}
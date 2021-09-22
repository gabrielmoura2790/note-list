import React, { useState } from 'react';
import {
  Container,
  Modal,
} from './styles';

import Header from '../../components/Header';
import Body from '../../components/Body';
import AddNote from '../../components/AddNote';
import ModalNote from '../../components/ModalNote';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <Container>
      <Header />
      <Body />
      <AddNote open={openModal} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
      >
        <ModalNote close={closeModal} />
      </Modal>
    </Container>
  );
}
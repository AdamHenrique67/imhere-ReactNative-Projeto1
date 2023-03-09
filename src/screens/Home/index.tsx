import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou em add');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventData}>
        Quinta, 9 de marça de 2023
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name='Adam' onRemove={() => handleParticipantRemove('Adam')}/>
    </View>
  );
}
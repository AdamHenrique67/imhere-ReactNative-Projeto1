import React from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou em add');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  const participants = ['Adam', 'Tuzin', 'Mateus', 'Daniel', 'Josiney', 'Luis', 'Thainá', 'Luana', 'Leticia', 'Gabriel', 'Samuel']

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

      <FlatList 
        data = {participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant 
          key={item} 
          name={item} 
          onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />

    </View>
  );
}
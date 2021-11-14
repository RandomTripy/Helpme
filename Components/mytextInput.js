import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';



export default function MyTextInput({navigation,route}) {
  console.disableYellowBox = true;

const MyTextInput = ({ value, name, type, onChange }) => {
    return (
      <TextInput
        value={value}
        onChangeText={text => onChange({ name, type, text })}
      />
    );
  };

}
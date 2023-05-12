import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, buttonStyle, textStyle, ...props }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...props}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#10a37f',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    minWidth: '100%',
    textAlign: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;

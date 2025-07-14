import  { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

export const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Invalid email format';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}`);
      setName('');
      setEmail('');
      setErrors({});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', marginVertical: 10,color:"black" }}>
        This is from UI component library
      </Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={[styles.input, errors.name && styles.errorInput]}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, errors.email && styles.errorInput]}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <View style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
      </View>
    </View>
  );
};

export default MyForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    marginBottom: 8,
  },
  button: {
    marginTop: 10,
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import  styles from './OnBoardScreenStyle'


export default function OnBoardingScreen() {

    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [groupType, setGroupType] = useState('');

    const groupOptions = ['Solo', 'Couple', 'Family', 'Friends'];
    const groupIconMap = {
        Solo: 'user',           // a single user icon
        Couple: 'heart',          // heart for couple
        Family: 'users',          // group icon
        Friends: 'users'           // same group icon for friends
    };
    const handleSubmit = () => {
        console.log('Destination:', destination);
        console.log('Duration:', duration);
        console.log('Group Type:', groupType);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.onboardContainer}>
                <Text style={styles.title}>Plan Your Journey, Your Way!</Text>
                <Text style={styles.subtitle}>Let’s create your personalised travel experience</Text>


                <View style={styles.questionsContainer}>
                    <View style={styles.question}>
                        <Text style={styles.label}>Where would you like to go?</Text>
                        <View style={styles.inputWrapper}>
                            <Icon name="map-pin" size={20} color="#aaa" />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter destination"
                                placeholderTextColor="#F5F5F5"
                                value={destination}
                                onChangeText={setDestination}
                            />
                        </View>
                    </View>

                    {/* Duration */}
                    <View style={styles.question}>
                        <Text style={styles.label}>How long will you stay?</Text>
                        <View style={styles.inputWrapper}>
                            <Icon name="calendar" size={20} color="#aaa" style={{ marginRight: 10 }} />
                            <Picker
                                selectedValue={duration}
                                style={styles.picker}
                                dropdownIconColor="#aaa"
                                onValueChange={(itemValue) => setDuration(itemValue)}
                            >
                                <Picker.Item
                                    label="Select duration"
                                    value=""
                                    color="#aaa"
                                    enabled={false}
                                />
                                <Picker.Item label="1 Day" value="1" />
                                <Picker.Item label="2 Days" value="2" />
                                <Picker.Item label="3 Days" value="3" />
                            </Picker>

                        </View>
                    </View>

                    <View style={styles.question}>
                        <View style={styles.question}>
                            <Text style={styles.label}>Who are you traveling with?</Text>
                            <View style={styles.groupContainer}>
                                {groupOptions.map(option => (
                                    <TouchableOpacity
                                        key={option}
                                        style={[
                                            styles.groupOption,
                                            groupType === option && styles.selectedOption
                                        ]}
                                        onPress={() => setGroupType(option)}
                                    >
                                        <View style={styles.groupContent}>
                                            <Icon
                                                name={groupIconMap[option]}           // ← now this exists
                                                size={18}
                                                color={groupType === option ? '#fff' : '#aaa'}
                                                style={styles.groupIcon}
                                            />
                                            <Text style={[
                                                styles.groupText,
                                                groupType === option && styles.selectedText
                                            ]}>
                                                {option}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* Custom Rounded Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

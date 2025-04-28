import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './DashboardStyle';
import Icon from 'react-native-vector-icons/Feather';

const Dashboard = () => {
    // Sample data for the trip details
    const tripDetails = {
        duration: '7 Days',
        groupSize: '4(2M,2F)',
        activities: '5 ',
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Hello Ajay!</Text>
                    <Text style={styles.subtext}>Ready for the trip?</Text>
                </View>
                <View style={styles.profileCircle}>
                    <Text style={styles.profileInitial}>A</Text>
                </View>
            </View>



            {/* Main Content */}
            <View style={styles.mainContent}>
                <Text style={styles.upcomingTripText}>Your Upcoming Trip</Text>

                <ImageBackground
                    source={require('../../assets/Tokyo.png')}
                    style={styles.tripImage}
                    resizeMode="cover"
                >
                    
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.6)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.gradientOverlay}

                    >
                      
                        <View style={styles.tripInfoContainer}>
                            <View style={styles.tripInfoRow}>
                                <View style={styles.tripInfoItem}>
                                    <Icon name="clock" size={24} color="#D3F462" />
                                    <Text style={styles.tripInfoText}>{tripDetails.duration}</Text>
                                </View>

                                <View style={styles.tripInfoItem}>
                                    <Icon name="users" size={24} color="#D3F462" />
                                    <Text style={styles.tripInfoText}>{tripDetails.groupSize}</Text>
                                </View>

                                <View style={styles.tripInfoItem}>
                                    <Icon name="check-circle" size={24} color="#D3F462" />
                                    <Text style={styles.tripInfoText}>{tripDetails.activities}</Text>
                                </View>
                            </View>
                        </View>

                    </LinearGradient>

                    {/* Heading and Subheading outside the gradient */}
                    <View style={styles.textOverlay}>
                        <Text style={styles.headingText}>TOKYO</Text>
                        <Text style={styles.subheadingText}>27.01.2025 - 02.02.2025</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="home" size={24} color="#D3F462" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="search" size={24} color="#676D75" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="plus" size={28} color="#D3F462" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="heart" size={24} color="#676D75" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="user" size={24} color="#676D75" />
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default Dashboard;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B0809',
        paddingTop: 50,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'column',
    },
    welcomeText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'Mont',
        fontWeight: '800',
        letterSpacing: 0,
        lineHeight: 32,
    },
    subtext: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0,
        fontFamily: 'Montserrat',
        color: '#FFFFFF',
        fontWeight: '500',
        marginTop: 4,
    },
    profileCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF7339',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInitial: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    tripInfoContainer: {
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        padding: 10,
        borderRadius: 8,
    },
    tripInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tripInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    tripInfoText: {
        fontSize: 16,
        color: '#D3F462',
        fontWeight: '500',
        marginLeft: 8,
    },
    groupSize: {
        fontSize: 16,
        color: '#D3F462',
        fontWeight: '500',
        marginBottom: 5,
    },
    activities: {
        fontSize: 16,
        color: '#D3F462',
        fontWeight: '500',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 20,
    },
    upcomingTripText: {
        fontFamily: 'Mont',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 24,
        color: '#FFFFFF',
        marginTop: 10,
    },
    tripImage: {
        width: '100%',
        height: 330,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 16,
        borderColor: '#FFFFFF',
        overflow: 'hidden',
    },
    gradientOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%', 
        padding: 20,
    },
    blurView: {
        flex: 1,
    },
    textOverlay: {
        position: 'absolute',
        top: 20, 
        left: 20,
        right: 20,
        zIndex: 1, 
    },
    headingText: {
        fontSize: 43,
        fontWeight: '900',
        color: 'white',
        textAlign: 'left',
    },
    subheadingText: {
        fontSize: 12,
        fontWeight: '600',
        color: 'white',
        marginTop: 5,
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#1D1F24',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#2E2F33',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default styles;
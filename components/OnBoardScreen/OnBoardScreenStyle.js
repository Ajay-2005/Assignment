import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    onboardContainer: {
        width: 353,
        gap: 20,
        top: 20,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#F5F5F5',
        textAlign: 'left',
        fontFamily: 'Mont',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#666',
        textAlign: 'left',
        fontFamily: 'Montserrat',
    },
    questionsContainer: {
        width: 353,
        height: 360,
        gap: 28,
        marginTop: 20,
    },
    question: {
        gap: 8,
    },
    label: {
        fontSize: 18,
        color: '#ccc',
        fontWeight: '700',
        fontFamily: 'Mont',
        letterSpacing: 0,
        marginBottom: 5,
    },
    input: {
        width: '95%',
        height: 42,
        padding: 10,
        gap: 10,
        borderWidth: 1,
        fontSize: 16,
        backgroundColor: '#333333',
        fontFamily: 'Mont',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        height: '50',
        borderWidth: 1,
        backgroundColor: '#333333',
        paddingHorizontal: 10,
        gap: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Mont',
    },
    picker: {
        flex: 1,
        height: '100%',
        color: '#F5F5F5',
        fontFamily: 'Mont',
    },
    pickerItem: {
        color: '#F5F5F5',
        fontFamily: 'Mont',
    },
    pickerIcon: {
        position: 'absolute',
        right: 12,
        top: '50%',
        transform: [{ translateY: -10 }],
    },
    groupContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
    },
    groupOption: {
        borderWidth: 1,
        borderColor: '#aaa',
        width: '45%',
        borderRadius: 8,
        height: 42,
        justifyContent: 'center',
        paddingHorizontal: 12,
        margin: 5,
        backgroundColor: '#333333',
    },

    groupContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    groupIcon: {
        marginRight: 6,
    },

    selectedText: {
        fontWeight: '600',
    },

    selectedOption: {
        backgroundColor: '#333333',
        borderColor: '#fff',
    },
    groupText: {
        color: '#fff',
        fontFamily: 'Mont',
    },

    buttonContainer: {
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
        padding: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#3643FB',
        paddingVertical: 14,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Mont',
    },
});
export default styles;
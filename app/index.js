import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';
import { link } from 'expo-router';


export default function index() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <LinearGradient
            locations={[{ x: 0.5, y: 0.5 }, { x: 1, y: 1 }]}
            colors={['#B6F2C5', '#91C6FC']}
            style={styles.container}
        >
            <Image source={require('../assets/logo.png')}></Image>
            <Text style={styles.title}>Good Vibe</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                />

                <MaterialCommunityIcons
                    name="email-edit-outline"
                    size={16}
                    color="grey"
                    style={{ position: 'absolute', top: 20, left: 20 }}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <AntDesign name="lock" size={16} color="grey" style={{ position: 'absolute', top: 20, left: 20 }} />
            </View>
            

            <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <Image source={require('../assets/icon-login.png')}></Image>
            <View style={{ position: "absolute", width: 500, height: 500, borderRadius: 1500, bottom: -400, backgroundColor: "white", zIndex: -1 }}></View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#4CACBC',
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 32,
    },
    input: {
        padding: 20,
        paddingLeft: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 250,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 3 }
    },
    button: {
        padding: 20,
        backgroundColor: '#4CACBC',
        borderRadius: 40,
        width: 250,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 3 }
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#34A853',
        textDecorationLine: 'underline'
    }
});
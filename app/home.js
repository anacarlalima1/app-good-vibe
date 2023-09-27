import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default function oi() {
    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={{ padding: 10 }}>
                        <Ionicons name="arrow-back-circle-outline" size={32} color="#4CACBC" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10 }}>
                        <MaterialCommunityIcons name="bell-ring-outline" size={32} color="#4CACBC" />
                    </TouchableOpacity>
                </View>
                <Text style={{ padding: 16, color: '#4CACBC' }}>Oi, Ana! Como você está se sentindo hoje?
                </Text>
            </View>
            <LinearGradient
                locations={[0.5, 1]}
                colors={['#B6F2C5', '#91C6FC']}
                style={styles.container}
            >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Informe os seus sintomas e encontre um profissional'
                    />
                    <Ionicons name="search-outline" size={16} color="grey"
                        style={{ position: 'absolute', top: 50, left: 60 }}
                    />
                </View>
                <View style={styles.headerActions}>
                    <TouchableOpacity style={{ padding: 10 }}>
                        <Text style={styles.textHome}>Serviços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10 }}>
                        <Text style={styles.textHome}>Ver todos</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%'
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    container: {
        height: 600,
    },
    textHome: {
        color: '#1D2366',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
    },
    input: {
        padding: 20,
        marginLeft: 40,
        marginTop: 30,
        paddingLeft: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        width: 300,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 2, height: 3 }
    },

});
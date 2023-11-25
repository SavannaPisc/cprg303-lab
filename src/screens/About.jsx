import MainLayout from '../layouts/MainLayout';
import { View, Text, Button } from 'react-native';

export default function About ({ navigation }) {
    // const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <View>
                <Text>MyToDoList</Text>
                <Text>By: Savanna Piscitelli</Text>
                <Text>Current Date: November 24</Text>
                <Button 
                    title="Go to Home" 
                    onPress={() => navigation.navigate('Home')} 
                />  
            </View>
        </MainLayout>

    );
}
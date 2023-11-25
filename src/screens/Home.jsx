import React, {useState} from 'react';
import { Button, SafeAreaView } from 'react-native';
import MainLayout from "../layouts/MainLayout";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

export default function Home({ navigation }) {
    const [tasks, setTasks] = useState(['Do landry', 'Go to gym', 'Walk dog']);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
      };

    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />  
            </SafeAreaView>
        </MainLayout>
    );
}
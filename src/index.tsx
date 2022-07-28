import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
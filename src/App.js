import React from 'react';
import RandomCard from "./components/card";
import './App.css'
import 'bulma/css/bulma.css'
import { Columns, Column, Button } from 'bloomer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Random Card Generator</p>
      </header>
    <Column hasTextAlign='centered'>
        <Button href='/' isColor='success' isOutlined>Refresh Page</Button>
    </Column>
      <Columns isCentered>
        <Column isSize='1/4'>
            <RandomCard />
          </Column>
          <Column isSize='1/4'>
            <RandomCard />
          </Column>
          <Column isSize='1/4'>
            <RandomCard />
          </Column>
      </Columns>
      <Columns isCentered>
        <Column isSize='1/4'>
            <RandomCard />
          </Column>
          <Column isSize='1/4'>
            <RandomCard />
          </Column>
          <Column isSize='1/4'>
            <RandomCard />
          </Column>
      </Columns>
    </div>
  );
}

export default App;

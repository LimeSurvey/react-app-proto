import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Editor from '../page/editor/Editor'

function App() {
  return (
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
        <Editor/>
    </ThemeProvider>
  );
}

export default App;

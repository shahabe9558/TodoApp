import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { apiConnector } from './services/apiConnector';
import { testing } from './services/api';
import axios, { Axios } from 'axios';
import TodoItem from './components/TodoItem';

function App() {
  return(
    <div className='h-[100vh] w-[100vw] border border-yellow-400 flex justify-center items-center'>
      <TodoItem/>
    </div>
  )
}
export default App;

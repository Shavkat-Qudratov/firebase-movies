import React, { useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, doc, addDoc } from 'firebase/firestore'

import './App.css';

function App() {
  const [kino, setKino] = React.useState([]);
  const [name, setName] = React.useState("");
  const useCollectionRef = collection(db, "kino");

  const getKino = async () => {
    const data = await getDocs(useCollectionRef);
    const newArr = data.docs.map((item) => {
      const newObj = {
        ...item.data(),
        id: item.id
      };
      return newObj;
    });
    setKino(newArr)
  };

  const handleSubmit = async () => {
    const newKino = {
      name: name,
    };
    await addDoc(useCollectionRef, newKino);
    getKino();
  }

  React.useEffect(() => {
    getKino()
  }, [])

  if (kino.length === 0) {
    return <h1>Loading...</h1>
  };

  return (
    <div className='App'>
      <h2>Kino</h2>
      <div>
        <div>
          <input
          value={name}
          onChange={({target}) => setName(target.value)}
          type='text'
          placeholder='enter kino name'
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </div>
      <hr/>
      <ul>
        {kino.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

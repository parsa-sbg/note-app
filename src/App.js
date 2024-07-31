import { useState } from 'react';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import AllNotes from './components/AllNotes/AllNotes';

function App() {

  const [allNotesList, setAllNotesList] = useState([])

  const addNewNote = (noteTitle) => {
    const newNote = {
      id: allNotesList.length + 1,
      title: noteTitle
    }
    setAllNotesList(prevNotes => [...prevNotes, newNote])
  }

  return (
    <div className="App">
      <AddNew addNewNote={addNewNote}></AddNew>
      <AllNotes notes={allNotesList} ></AllNotes>
    </div>
  );
}

export default App;

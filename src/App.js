import { useEffect, useState } from 'react';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import AllNotes from './components/AllNotes/AllNotes';

function App() {

  const [allNotesList, setAllNotesList] = useState([])

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    storedNotes && setAllNotesList(JSON.parse(storedNotes))
  },[])

  useEffect(() => {
    console.log(allNotesList);
    localStorage.setItem('notes', JSON.stringify(allNotesList))
  } ,[allNotesList])

  const addNewNote = (noteTitle, noteColor) => {
    const newNote = {
      id: allNotesList.length + 1,
      title: noteTitle,
      color: noteColor
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

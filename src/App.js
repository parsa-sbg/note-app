import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import AllNotes from './components/AllNotes/AllNotes';

function App() {

  const [allNotesList, setAllNotesList] = useState([])

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    storedNotes && setAllNotesList(JSON.parse(storedNotes))
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotesList))
  }, [allNotesList])

  const addNewNote = useCallback((noteTitle, noteColor) => {
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      color: noteColor
    }
    setAllNotesList(prevNotes => [...prevNotes, newNote])
  }, [])

  const DeleteNote = useCallback((noteId) => {    
    setAllNotesList(prevNotes => prevNotes.filter(note => note.id !== noteId))
  }, [])

  return (
    <div className="App">
      <AddNew addNewNote={addNewNote}></AddNew>
      <AllNotes DeleteNote={DeleteNote} notes={allNotesList} ></AllNotes>
    </div>
  );
}

export default App;

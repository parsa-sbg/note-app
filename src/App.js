import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import AllNotes from './components/AllNotes/AllNotes';

function App() {

  const [allNotesList, setAllNotesList] = useState([])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes')
    storedNotes && setAllNotesList(JSON.parse(storedNotes))

    const theme = JSON.parse(localStorage.getItem('theme'))
    theme ? setIsDark(true) : setIsDark(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(allNotesList))
  }, [allNotesList])

  useEffect(() => {
    localStorage.setItem('theme', isDark)
  }, [isDark])

  const addNewNote = useCallback((noteTitle, noteColor, noteTextColor) => {
    const newNote = {
      id: Date.now(),
      title: noteTitle,
      color: noteColor,
      textColor: noteTextColor
    }
    setAllNotesList(prevNotes => [...prevNotes, newNote])
  }, [])

  const DeleteNote = useCallback((noteId) => {
    setAllNotesList(prevNotes => prevNotes.filter(note => note.id !== noteId))
  }, [])

  const changeTheme = useCallback(() => {
    setIsDark(prevTheme => !prevTheme)
  }, [])

  return (
    <div className={isDark ? 'App dark' : 'App'}>
      <AddNew addNewNote={addNewNote} isDark={isDark} changeTheme={changeTheme}></AddNew>
      <AllNotes DeleteNote={DeleteNote} notes={allNotesList}  ></AllNotes>
    </div>
  );
}

export default App;

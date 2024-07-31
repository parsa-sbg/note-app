import React, { useState } from 'react'
import './AddNew.css'

export default function AddNew( {addNewNote} ) {


    const [noteTitle, setNoteTitle] = useState('')


    const inputChangeHandler = e => {
        setNoteTitle(e.target.value)
    }

    const btnClickHandler = () => {
        if (noteTitle.trim()) {
            addNewNote(noteTitle.trim())
            setNoteTitle('')
        }
    }

    return (
        <div className='addnew'>
            <input onChange={inputChangeHandler} value={noteTitle} className='AllNotes__input' type="text" />
            <button onClick={btnClickHandler} className='AllNotes__btn'>add new note</button>
        </div>
    )
}
import React from 'react'
import './AllNotes.css'

export default function AllNotes({ notes, DeleteNote }) {

  return (

    <div className='allNotes'>
      <h2 className='allNotes__title'>your notes: </h2>
      <div className='AllNotes__list'>
        {!notes.length && (<h2>You have no notes ...</h2>)} 
        {notes.map(note =>
          <div
            onClick={() => { DeleteNote(note.id) }}
            style={{ backgroundColor: note.color }}
            key={note.id}
            className='AllNotes__list-item'>
            {note.title}
          </div>)}
      </div>

    </div>

  )
}

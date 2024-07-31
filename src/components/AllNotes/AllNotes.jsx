import React from 'react'
import './AllNotes.css'

export default function AllNotes({notes}) {

  return (
    <div className='AllNotes'>
      <ul className='AllNotes__list'>
        {notes.map(note => <li key={note.id} className='AllNotes__list-item'>{note.title}</li>)}
      </ul>
    </div>
  )
}

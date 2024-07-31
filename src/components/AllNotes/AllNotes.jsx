import React from 'react'
import './AllNotes.css'

export default function AllNotes({notes}) {

  return (
    <div className='AllNotes'>
      <div className='AllNotes__list'>
        {notes.map(note => <div key={note.id} className='AllNotes__list-item'>{note.title}</div>)}
      </div>
    </div>
  )
}

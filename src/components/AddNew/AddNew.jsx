import React, { useState } from 'react'
import './AddNew.css'

export default function AddNew({ addNewNote }) {


    const [noteTitle, setNoteTitle] = useState('')
    const [colors, setColors] = useState(['#fff', '#00e5ffaa', '#ff0000aa', '#3700ffa0', '#bcf001a0'])

    const [inputColor, setInputColor] = useState('#fff')


    const inputChangeHandler = e => {
        setNoteTitle(e.target.value)
    }

    const btnClickHandler = () => {
        if (noteTitle.trim()) {
            addNewNote(noteTitle.trim(), inputColor)
            setNoteTitle('')
        }
    }

    const colorClickHandler = e => {
        const maionColor = e.target.attributes['color'].value
        setInputColor(maionColor)
    }

    return (
        <div className='addnew'>
            <textarea style={{ backgroundColor: inputColor }} onChange={inputChangeHandler} value={noteTitle} className='AllNotes__input' type="text" />
            <div className='addnew__colors'>
                {colors.map(color =>
                    <div key={color} onClick={colorClickHandler} color={color} style={{ backgroundColor: color }} className='addnew__color'></div>
                )}
            </div>
            <button onClick={btnClickHandler} className='AllNotes__btn'>add new note</button>
        </div>
    )
}
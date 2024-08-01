import React, { memo, useCallback, useState } from 'react'
import './AddNew.css'

export default memo(function AddNew({ addNewNote }) {


    const [noteTitle, setNoteTitle] = useState('')
    const [colors, setColors] = useState(['#fff', '#00e5ffaa', '#ff0000aa', '#3700ffa0', '#bcf001a0'])
    const [inputColor, setInputColor] = useState('#fff')
    const [inputMaxLength, setInputMaxLength] = useState(76)



    const inputChangeHandler = useCallback(e => {
        e.target.value.length <= inputMaxLength && setNoteTitle(e.target.value)
    }, [])

    const btnClickHandler = useCallback(() => {
        if (noteTitle.trim()) {
            addNewNote(noteTitle.trim(), inputColor)
            setNoteTitle('')
        }
    }, [inputColor, noteTitle])

    const colorClickHandler = useCallback(e => {
        const mainColor = e.target.attributes['data-color'].value
        setInputColor(mainColor)
    }, [])

    const customColorChangeHandler = useCallback((e) => {
        setInputColor(e.target.value)
    }, [])

    return (
        <div className='addnew'>
            <div className='AllNotes__input-wrapper'>
                <textarea style={{ backgroundColor: inputColor }} onChange={inputChangeHandler} value={noteTitle} className='AllNotes__input' type="text" />
                <span className='AllNotes__input-maxlength'>{noteTitle.length}/{inputMaxLength}</span>
            </div>
            <div className='addnew__colors'>
                {colors.map(color =>
                    <div key={color} onClick={colorClickHandler} data-color={color} style={{ backgroundColor: color }} className='addnew__color'></div>
                )}
                <div className='addnew__custom-color-wrapper'>
                    <span className='addnew__custom-color-label'>use custom color:</span>
                    <div className='addnew__colorinput-wrapper'>
                        <input onChange={customColorChangeHandler} className='addnew__colorinput' type="color" />
                    </div>
                </div>
            </div>
            <button onClick={btnClickHandler} className='AllNotes__btn'>add new note</button>
        </div>
    )
})
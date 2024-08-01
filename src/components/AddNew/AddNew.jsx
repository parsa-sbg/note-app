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
        <div className='addnew-container'>

            <div className='addnew'>
                <div className='addnew__input-wrapper'>
                    <textarea placeholder='write your note... ' style={{ backgroundColor: inputColor }} onChange={inputChangeHandler} value={noteTitle} className='addnew__input' type="text" />
                    <span className='addnew__input-maxlength'>{noteTitle.length}/{inputMaxLength}</span>
                </div>

                <button onClick={btnClickHandler} className='addnew__btn'>add new note</button>
            </div>

            <div className='options'>

                <div className='options__item'>

                    <div className='option'>
                        <h3 className='option__title'>box color: </h3>
                        <div className='option__default-colors'>
                            {colors.map(color =>
                                <div key={color} onClick={colorClickHandler} data-color={color} style={{ backgroundColor: color }} className='option__color'></div>
                            )}
                        </div>

                        <div className='option__custom-color-wrapper'>
                            <span className='option__custom-color-label'>use custom color:</span>
                            <div className='option__colorinput-wrapper'>
                                <input onChange={customColorChangeHandler} className='option__colorinput' type="color" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
})
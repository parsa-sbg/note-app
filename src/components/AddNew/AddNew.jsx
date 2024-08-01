import React, { memo, useCallback, useState } from 'react'
import './AddNew.css'
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";


export default memo(function AddNew({ addNewNote, isDark, changeTheme }) {


    const [noteTitle, setNoteTitle] = useState('')
    const [boxColors, setBoxColors] = useState(['#fff', '#00e5ffaa', '#ff0000aa', '#3700ffa0', '#bcf001a0'])
    const [textColors, setTextColors] = useState(['#000', '#f00', '#0f0', '#00f', '#ffdd00'])
    const [inputColor, setInputColor] = useState('#fff')
    const [inputMaxLength, setInputMaxLength] = useState(76)
    const [inputTextColor, setInputTextColor] = useState('#000')



    const inputChangeHandler = useCallback(e => {
        e.target.value.length <= inputMaxLength && setNoteTitle(e.target.value)
    }, [])

    const btnClickHandler = useCallback(() => {
        if (noteTitle.trim()) {
            addNewNote(noteTitle.trim(), inputColor, inputTextColor)
            setNoteTitle('')
        }
    }, [inputColor, noteTitle, inputTextColor])

    const boxColorClickHandler = useCallback(e => {
        const mainColor = e.target.attributes['data-color'].value
        setInputColor(mainColor)
    }, [])

    const customBoxColorChangeHandler = useCallback((e) => {
        setInputColor(e.target.value)
    }, [])

    const textColorClickHandler = useCallback((e) => {
        const mainColor = e.target.attributes['data-color'].value
        setInputTextColor(mainColor)
    }, [])

    const customTextColorChangeHandler = useCallback((e) => {
        setInputTextColor(e.target.value)
    }, [])

    return (
        <div className='addnew-container'>

            <div className='addnew'>
                <div className='addnew__input-wrapper'>
                    <textarea placeholder='write your note... ' style={{ backgroundColor: inputColor, color: inputTextColor }} onChange={inputChangeHandler} value={noteTitle} className='addnew__input' type="text" />
                    <span className='addnew__input-maxlength'>{noteTitle.length}/{inputMaxLength}</span>
                </div>

                <button onClick={btnClickHandler} className='addnew__btn'>add new note</button>
            </div>

            <div className='options'>

                <div className='options__item'>

                    <div className='option'>
                        <h3 className='option__title'>box color: </h3>
                        <div className='option__default-colors'>
                            {boxColors.map(color =>
                                <div key={color} onClick={boxColorClickHandler} data-color={color} style={{ backgroundColor: color }} className='option__color'></div>
                            )}
                        </div>

                        <div className='option__custom-color-wrapper'>
                            <span className='option__custom-color-label'>use custom color:</span>
                            <div className='option__colorinput-wrapper'>
                                <input onChange={customBoxColorChangeHandler} className='option__colorinput' type="color" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='options__item'>

                    <div className='option'>
                        <h3 className='option__title'>text color: </h3>
                        <div className='option__default-colors'>
                            {textColors.map(color =>
                                <div key={color} onClick={textColorClickHandler} data-color={color} style={{ backgroundColor: color }} className='option__color'></div>
                            )}
                        </div>

                        <div className='option__custom-color-wrapper'>
                            <span className='option__custom-color-label'>use custom color:</span>
                            <div className='option__colorinput-wrapper'>
                                <input onChange={customTextColorChangeHandler} className='option__colorinput' type="color" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='options__item'>

                    <div className='theme-option'>
                        <h3 className='option__title'>app theme: </h3>
                        <button onClick={changeTheme} className='theme-option__btn'>{isDark ? (<FaRegMoon color='var(--text-color)' size={20} />) : <FaRegSun size={20} />}</button>
                    </div>

                </div>

            </div>
        </div>

    )
})
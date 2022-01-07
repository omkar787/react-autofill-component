import React, { useState } from 'react'
import SuggestionList from './SuggestionList';

export default function Autofill({ options }) {
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState(null)
    const [activeSuggestion, setActiveSuggestion] = useState(0)


    const onChangeHandle = (e) => {
        const input = e.target.value
        const suggest = options.filter((op) => {
            if (op.toLowerCase().indexOf(input.toLowerCase()) > -1) {
                return true
            }

            return false
        })
        setSuggestions(suggest)
        setText(input)
        setActiveSuggestion(0)
    }

    const onKeyDownHandle = (e) => {
        const key = e.keyCode;
        if (key === 13) {
            //enter
            setText(suggestions[activeSuggestion])
        } else if (key === 40) {
            //keydown
            let currPos = activeSuggestion + 1
            if (currPos > (suggestions.length - 1)) {
                currPos = 0
            }
            setActiveSuggestion(currPos)
        } else if (key === 38) {
            //keyup
            let currPos = activeSuggestion - 1
            if (currPos < 0) {
                currPos = suggestions.length - 1
            }
            setActiveSuggestion(currPos)
        }
    }

    return (
        <div className='autofill'>
            <input
                type="text"
                placeholder="Start typing"
                value={text}
                onChange={onChangeHandle}
                onKeyDown={onKeyDownHandle}
                className='text-box'
            />

            {
                suggestions &&
                text &&
                < SuggestionList
                    suggestions={suggestions}
                    setText={setText}
                    activeSuggestion={activeSuggestion}
                    setActiveSuggestion={setActiveSuggestion}
                />
            }
        </div>
    )
}

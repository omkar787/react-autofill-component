import React from 'react'

export default function SuggestionList({ suggestions, setText, activeSuggestion, setActiveSuggestion }) {

    const onClickHandle = (e, index) => {
        setText(e.target.innerText)
        setActiveSuggestion(index)
    }

    return (
        <div>
            <ul className='list'>
                {
                    suggestions.map((suggestion, index) => {
                        return (
                            <li key={index} className={`individual-list ${index === activeSuggestion ? "suggestion-active" : ""}`}
                                onClick={(e) => {
                                    onClickHandle(e, index)
                                }}>
                                {suggestion}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

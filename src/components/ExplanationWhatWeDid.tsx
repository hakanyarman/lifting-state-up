import React from 'react'

interface ExplanationProps {
    explanation : string
}

export default function ExplanationWhatWeDid({ explanation} : ExplanationProps) {
    return (
        <h3>{explanation}</h3>
    )
}


import React from 'react'

export default function TopText({toptexttitle}) {
    return (
        <div className="container">
            <div className="row">
            <div className="col text-center mb-4">
                <h1 className="display-4">{toptexttitle}</h1>
            </div>
            </div>
        </div>
    )
}

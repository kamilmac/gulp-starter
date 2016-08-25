/// <reference path="../../typings/index.d.ts" />

import * as React from 'react'
import {render} from 'react-dom'

const Hello = () => {
    return (
        <h1>Hello</h1>
    )
}

render(
    <Hello/>,
    document.getElementById('app')
)


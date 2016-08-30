import React from 'react'
import {render} from 'react-dom'

export const Hello = () => <h1>Hello</h1>

render(
	<Hello/>,
	document.getElementById('app')
)

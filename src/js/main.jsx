import React from 'react'
import {render} from 'react-dom'
import anime from 'animejs'

export const Tab = () => <div className="iconContainer">
		<h1>HELLO</h1>
		<Icon fill='red'/>
		<Icon fill='blue'/>
		<Icon fill='yellow'/>
		<Icon fill='brown'/>
	</div>

export const Icon = ({fill}) => <div className="icon">
		<svg width="50px" height="50px">
			<circle cx="25" cy="25" r="20" stroke="black" strokeWidth="3" fill={fill} />
		</svg>
	</div>

render(
	<Tab/>,
	document.getElementById('app')
)

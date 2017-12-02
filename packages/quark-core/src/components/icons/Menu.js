// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Menu = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-menu"
        {...props}
    >
        <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
)

export default Menu

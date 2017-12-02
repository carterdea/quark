// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ChevronsUp = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevrons-up"
        {...props}
    >
        <Path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
    </Svg>
)

export default ChevronsUp

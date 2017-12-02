// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const Zap = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-zap"
        {...props}
    >
        <Path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Svg>
)

export default Zap

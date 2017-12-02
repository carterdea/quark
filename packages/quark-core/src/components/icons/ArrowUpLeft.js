// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const ArrowUpLeft = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up-left"
        {...props}
    >
        <Path d="M18 18L6 6M15 6H6v9" />
    </Svg>
)

export default ArrowUpLeft

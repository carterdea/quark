// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'

const FastForward = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-fast-forward"
        {...props}
    >
        <Path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" />
    </Svg>
)

export default FastForward

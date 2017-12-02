// @flow
// external imports
import React from 'react'
import { Svg, Path, Rect } from 'svgs'

const Layout = props => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-layout"
        {...props}
    >
        <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
        <Path d="M3 9h18M9 21V9" />
    </Svg>
)

export default Layout

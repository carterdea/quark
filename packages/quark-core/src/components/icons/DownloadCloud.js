// @flow
// external imports
import React from 'react'
import { Svg, Path } from 'svgs'
// internal imports
import type { IconProps } from '.'

const DownloadCloud = (props: IconProps) => (
    <Svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-download-cloud"
        {...props.style}
    >
        <Path d="M8 17l4 4 4-4M12 12v9" />
        <Path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
    </Svg>
)

export default DownloadCloud
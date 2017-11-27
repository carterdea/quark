// external imports
import React from 'react'
import { Text } from 'react-native'
// local imports
import CardGrid from './'
import { Card } from 'quark-core'

import renderer from 'react-test-renderer'

// the subject of our test
const Subject = ({ ...unused }) => (
    <CardGrid {...unused}>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
        <Card>
            <Text>hello</Text>
        </Card>
    </CardGrid>
)

it('defaults to 3 columns', () => {
    expect(mount(<Subject />)).toMatchSnapshot()
})

it('supports specifying number of columns', () => {
    expect(mount(<Subject nCols={2} />)).toMatchSnapshot()
})

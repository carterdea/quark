// external imports
import React from 'react'
import { Text } from 'react-native'
import { mount } from 'enzyme'
// local imports
import { TableHeaderCell } from 'quark-core'

it('renders', () =>
    expect(
        mount(
            <TableHeaderCell>
                <Text>hello</Text>
            </TableHeaderCell>
        )
    ).toMatchSnapshot())

// @flow
// external imports
import * as React from 'react'
// local imports
import { Interval } from '.'

type Props = {
    items: any[],
    children: number => void,
    interval: number
}

type State = {
    index: number
}

class Cycle extends React.Component<Props, State> {
    state = {
        index: 0
    }

    componentWillReceiveProps({ items: items1 }, { items: items2 }) {
        if (JSON.stringify(items1) !== JSON.stringify(items2)) {
            // reset the cycle to the first element
            this._goTo(0)
        }
    }

    render = () => (
        <React.Fragment>
            <Interval interval={this.props.interval}>{this._next}</Interval>
            {this.props.children({
                item: this.props.items[this.state.index],
                next: this._next,
                previous: this._prev,
                goTo: this._goTo
            })}
        </React.Fragment>
    )

    _next = (): void =>
        this.setState(({ index }) => ({
            index: index === this.props.items.length - 1 ? 0 : index + 1
        }))

    _prev = () =>
        this.setState(({ index }) => ({
            index: index === 0 ? this.props.items.length - 1 : index - 1
        }))

    _goTo = index =>
        this.setState(() => ({
            index
        }))
}

export default Cycle

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

    get nextIndex(): number {
        // grab the used state
        const { index } = this.state

        // cycle back to zero if we are passed the last item
        return index === this.props.items.length - 1 ? 0 : index + 1
    }

    render = () => (
        <React.Fragment>
            <Interval interval={this.props.interval}>
                {() => this.setState({ index: this.nextIndex })}
            </Interval>
            {this.props.children(this.props.items[this.state.index])}
        </React.Fragment>
    )
}

export default Cycle
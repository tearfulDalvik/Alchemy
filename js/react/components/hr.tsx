import React from 'react'
import { ReactProps, getStyle } from '../reborn';

export class LowProfileHr extends React.Component<ReactProps, {}> {
    render() {
        return <hr className={getStyle()['low-profile']} id={this.props.id}>
            {this.props.children}
        </hr>
    }
}

export class Hr extends React.Component<ReactProps, {}> {
    render() {
        return <hr id={this.props.id}>
            {this.props.children}
        </hr>
    }
}

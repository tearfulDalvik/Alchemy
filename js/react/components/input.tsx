import React from 'react'
import { ReactProps, getStyle } from '../reborn';

type InputProps = {
    placeHolder: string,
    name: string,
    type?: string,
    value?: string,
} & ReactProps

export class Input extends React.Component<InputProps, {}> {
    render() {
        return <input placeholder={this.props.placeHolder} type={this.props.type} value={this.props.value} name={this.props.name} id={this.props.id}/>
    }
}

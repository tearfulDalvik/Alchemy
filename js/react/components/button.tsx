import React from 'react'
import { ReactProps, getStyle } from '../reborn';

type ButtonProps = {
    name: string,
    style?: string,
    onClick?: (e: React.MouseEvent) => void,
} & ReactProps

export class Button extends React.Component<ButtonProps, {}> {
    render() {
        return <button onClick={this.props.onClick} className={`${getStyle()[this.props.style]} ${this.props.className}`} id={this.props.id}>
            {this.props.children}
        </button>
    }
}

export class LowProfileButton extends React.Component<ButtonProps, {}> {
    render() {
        return <button onClick={this.props.onClick} className={`${getStyle()[this.props.style]} ${getStyle()['low-profile']} ${this.props.className}`} id={this.props.id}>
            {this.props.children}
        </button>
    }
}

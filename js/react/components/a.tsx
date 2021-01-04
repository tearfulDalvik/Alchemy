import React from 'react'
import { ReactProps, getStyle } from '../reborn';

type LinkProps = {
    href: string,
} & ReactProps

export class StandardLink extends React.Component<LinkProps, {}> {
    render() {
        return <a className={this.props.className || ""} href={this.props.href}>
            {this.props.children}
        </a>
    }
}

export class HoverableLink extends React.Component<LinkProps, {}> {
    render() {
        return <p className={`${this.props.className || ""} ${getStyle().hoverable}`}>
            <a href={this.props.href}>
                {this.props.children}
            </a>
        </p>
    }
}

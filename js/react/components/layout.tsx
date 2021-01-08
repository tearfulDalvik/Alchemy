import React from 'react'
import { ReactProps, getStyle } from '../reborn';

type HeaderProps = {
    href: string,
} & ReactProps

type ContentProps = ReactProps
type CopyrightProps = ReactProps

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return <div className={getStyle().header}>
            <h1><a href={this.props.href}>{this.props.children}</a></h1>
        </div>
    }
}

export class Content extends React.Component<ContentProps, {}> {
    render() {
        return <div className={`${this.props.className || ""} ${getStyle().content}`}>
            {this.props.children}
        </div>
    }
}

export class Copyright extends React.Component<CopyrightProps, {}> {
    render() {
        return <div className={`${this.props.className || ""} ${getStyle().copyright}`}>
            <p>&copy; <span id="year">{new Date().getFullYear()}</span> Gufeng Shen{this.props.children}</p>
        </div>
    }
}

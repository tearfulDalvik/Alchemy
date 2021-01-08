let $style: {[key: string]: string} = {};

export type ReactProps = {
    alchemy: {[key: string]: string},
    // Additional classNames
    className?: string,
    // Children is default in typescript
}

export function setStyle(style: {[key: string]: string}) {
    $style = style;
}

export function getStyle(): {[key: string]: string} {
    return $style;
}
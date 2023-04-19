/// <reference types="react-scripts" />

declare module 'querystring' {
    export function stringify(val: object): string
    export function parse(val: string): object
}

declare module 'react-bootstrap-form'


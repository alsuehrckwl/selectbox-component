import * as React from 'react'

interface IOption {
    id: Number | null
    name: String;
    value: String;
}

interface ISelect {
    options: Array<IOption>;
    isNative: Boolean;
    isMobile: Boolean;
}

export const Select: React.FC<ISelect> = ({ options, isNative = false, isMobile = false }) => {
    return <div>select</div>
}
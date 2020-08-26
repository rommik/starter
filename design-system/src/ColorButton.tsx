import React from "react"
export interface ColorButtonProps {
    color: string
    onClick?: (color: string) => void
}
export const ColorButton = (props: ColorButtonProps) => {
    const {color, onClick} = props;
    return <button style={{color}} onClick={() => onClick && onClick(color)}>Color Button</button>
};
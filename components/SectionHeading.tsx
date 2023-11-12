import React, {ReactNode} from 'react'

type Props = {
    children: ReactNode,
};
export default function SectionHeading({children}: Props) {
    return (
        <h2 className={'text-3xl font-medium capitalize mb-8 text-center'}>{children}</h2>
    )
}

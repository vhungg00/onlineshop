import React, { useEffect } from 'react';
import { useCollapse } from 'react-collapsed';

type Props = {
    isOpen: boolean;
    children: React.ReactNode;
    duration?: number;
}

export const Accordion = ({ isOpen, duration = 500, children }: Props) => {
    const { getCollapseProps, setExpanded } = useCollapse({ isExpanded: isOpen, duration });

    useEffect(() => () => {
        setExpanded(isOpen);
    }, [isOpen, setExpanded])

    return <section {...getCollapseProps()}>{children}</section>;
};
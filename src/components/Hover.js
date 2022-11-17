import React, { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);
    return (
        <div
            ref={ref}
            style={{
                width: '300px',
                height: '300px',
                backgroundColor: isHovering ? 'red' : 'green',
            }}
        ></div>
    );
};

export default Hover;

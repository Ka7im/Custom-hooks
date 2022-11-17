import { useEffect, useState } from 'react';

export default function useHover(ref) {
    const [isHovering, setIsHovering] = useState(false);

    const on = () => {
        setIsHovering(true);
    };
    const off = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const { current } = ref;

        current.addEventListener('mouseenter', on);
        current.addEventListener('mouseleave', off);

        return () => {
            current.removeEventListener('mouseenter', on);
            current.removeEventListener('mouseleave', off);
        };
    }, []);

    return isHovering;
}

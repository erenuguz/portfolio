import {useRef, useState} from 'react';

export default function useHorizontalDrag() {
    const containerRef = useRef(null);
    const startXRef = useRef(0);
    const startScrollLeftRef = useRef(0);
    const pointerIdRef = useRef(null);
    const didDragRef = useRef(false);

    const [isDragging, setIsDragging] = useState(false);

    function handlePointerDown(event) {
        if (event.pointerType !== 'mouse' || event.button !== 0) {
            return;
        }

        const container = containerRef.current;

        if (!container) {
            return;
        }

        pointerIdRef.current = event.pointerId;
        startXRef.current = event.clientX;
        startScrollLeftRef.current = container.scrollLeft;
        didDragRef.current = false;

        container.setPointerCapture(event.pointerId);
        setIsDragging(true);
    }

    function handlePointerMove(event) {
        if (!isDragging || event.pointerId !== pointerIdRef.current) {
            return;
        }

        const container = containerRef.current;

        if (!container) {
            return;
        }

        const distance = event.clientX - startXRef.current;

        if (Math.abs(distance) > 5) {
            didDragRef.current = true;
            event.preventDefault();
        }

        container.scrollLeft = startScrollLeftRef.current - distance * 1.2;
    }

    function stopDragging() {
        const container = containerRef.current;

        if (
            container &&
            pointerIdRef.current !== null &&
            container.hasPointerCapture(pointerIdRef.current)
        ) {
            container.releasePointerCapture(pointerIdRef.current);
        }

        pointerIdRef.current = null;
        setIsDragging(false);
    }

    function handleClickCapture(event) {
        if (!didDragRef.current) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        didDragRef.current = false;
    }

    return {
        containerRef,
        isDragging,
        dragHandlers: {
            onPointerDown: handlePointerDown,
            onPointerMove: handlePointerMove,
            onPointerUp: stopDragging,
            onPointerCancel: stopDragging,
            onClickCapture: handleClickCapture,
        },
    };
}

import { useState, useCallback } from 'react';

export default function useInput (initialValue = null) {
    const [state, setState] = useState(initialValue);
    const handler = useCallback((e) => {
        setState(e.target.value);
    }, []);

    return [state, setState, handler];
}
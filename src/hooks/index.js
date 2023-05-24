
// export const useLocalStorage = (key, defaultValue = null) => {
//     const [value, setValue] = useState(() => {
//         const saved = localStorage.getItem(key);
//         if (saved !== null) {
//             return JSON.parse(saved);
//         }
//         return defaultValue;
//     });
// };

import { useEffect, useState } from "react";

// ==================================================
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const getLocalStorage = (key) => {
    // return JSON.parse(localStorage.getItem(key));
    return localStorage.getItem(key);
}
export const delLocalStorage = (key) => {
    return localStorage.removeItem(key)
}


// ==================================================

export const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}

export const useLocalStorage = (key, initialValue = null) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue];
};
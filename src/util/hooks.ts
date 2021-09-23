import { useState } from 'react';

export const useSelection = (initialState = ("Merge Sort")) => {
    const [selection, setSelection] = useState(initialState);

    return {
        selection,
        setSelection
    }
}

export const useArray = (initialState: Array<Number>  = ([])) => {

    const [arr, setArr] = useState(initialState);

    const generateArray = (arraySize: number) => {
       let arr: Array<Number> = [];

        for (let i = 0; i < arraySize; i++) {
            arr.push(randomIntegers(5, 730))
        }
        setArr(arr)
    };

    const randomIntegers = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return {
        arr,
        setArr,
        generateArray
    }
}
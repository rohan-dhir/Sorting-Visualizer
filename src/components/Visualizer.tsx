import { useEffect } from 'react';
import NavBar from './Header/NavBar';
import Bars from './Bars';

import { useArray, useSelection } from '../util/hooks';
import { mergeSortAnimations } from '../sortingAlgorithms/MergeSort';
import { quickSortAnimations } from '../sortingAlgorithms/QuickSort';
import { bubbleSortAnimations } from '../sortingAlgorithms/BubbleSort';
import { insertionSortAnimations } from '../sortingAlgorithms/InsertionSort';
import { selectionSortAnimations } from '../sortingAlgorithms/SelectionSort';

const ARRAY_SIZE = 310;
const PRIMARY_COLOUR = '#0ac476';
const SECONDARY_COLOUR = 'red';

let barWidth = 2;
const Visualizer = () => {
    const { arr, setArr, generateArray } = useArray([]);
    const { selection, setSelection } = useSelection();
    
    useEffect(() => { 
        generateArray(ARRAY_SIZE);
    }, []);

    const reset = (size:number) => {
        generateArray(size);
        barWidth = 2 / (size / 310);
    };

    const selectAlgo = (selectedAlgo: string) => {
        setSelection(selectedAlgo);
        console.log(selectedAlgo);
    }

    const sort = (animationSpeed: number) => {
        switch(selection) {
            case "Merge Sort":
                mergeSort(animationSpeed);
                break;
            case "Quick Sort":
                quickSort(animationSpeed);
                break;
            case "Bubble Sort":
                bubbleSort(animationSpeed);
                break;
            case "Insertion Sort":
                insertionSort(animationSpeed);
                break;
            case "Selection Sort":
                selectionSort(animationSpeed);
                break;
            default:
                break;
        }
    }

    const mergeSort = (animationSpeed: number) => {
        console.log("performing merge sort");
        const [animations] = mergeSortAnimations(arr);
        visualize(animations, animationSpeed);
    };

    const quickSort = (animationSpeed: number) => {
        console.log("performing quick sort");
        const [animations,sortArray] = quickSortAnimations(arr);
        visualize(animations, animationSpeed);    
    }

    const bubbleSort = (animationSpeed: number) => {
        const [animations] = bubbleSortAnimations(arr);
        visualize(animations, animationSpeed);
    }

    const insertionSort = (animationSpeed: number) => {
        console.log("performing insertion sort");
        const [animations] = insertionSortAnimations(arr);
        visualize(animations, animationSpeed);
    }

    const selectionSort = (animationSpeed: number) => {
        console.log("performing selection sort");
        const [animations] = selectionSortAnimations(arr);
        visualize(animations, animationSpeed);
    }

    const visualize = (animations:any, animationSpeed: number) => {
        for (let i = 0; i < animations.length; i++) {
            const isColourChange = animations[i][0] == "comparision1" || animations[i][0] == "comparision2";
            const arrayBars = document.getElementsByClassName('arr-bar') as HTMLCollectionOf<HTMLElement>;
            if(isColourChange === true) {
                const color = (animations[i][0] == "comparision1") ? SECONDARY_COLOUR : PRIMARY_COLOUR;
                const [comparision, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                },i * animationSpeed);
            }
            else {
                const [swap, barIndex, newHeight] = animations[i];
                if (barIndex === -1) {
                    continue;
                }
                const barStyle = arrayBars[barIndex].style;
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`;
                },i * animationSpeed);  
            }        
        }
    }

    return (
        <> 
           <NavBar selectAlgo={selectAlgo} selection={selection} reset={reset} sort={sort} />
           <Bars arr={arr} width={barWidth} />
        </>
    );
};

export default Visualizer;
export const mergeSortAnimations = (array: Array<any>) => {
    let animations: Array<any>  = [];
    let auxillaryArray = array.slice();
    mergeSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
    array = auxillaryArray;
    return [animations, array];
}

const mergeSort = (auxillaryArray: Array<number>, startIndex: number, endIndex: number, animations: Array<any>) => {
    if(startIndex === endIndex)
        return;
    const middleIndex = Math.floor((startIndex + endIndex)/2);
    mergeSort(auxillaryArray, startIndex, middleIndex, animations);
    mergeSort(auxillaryArray, middleIndex + 1, endIndex, animations);
    merge(auxillaryArray, startIndex, middleIndex, endIndex, animations);
}

const merge = (
    auxillaryArray: Array<number>, 
    startIndex: number, 
    middleIndex: number, 
    endIndex: number, 
    animations: Array<any>
    ) => {
    let sortArray = [];
    let i = startIndex;
    let j = middleIndex + 1;
    while(i <= middleIndex && j <= endIndex) {
        animations.push(["comparision1", i, j]);
        animations.push(["comparision2", i, j]);
        
        if(auxillaryArray[i] <= auxillaryArray[j]) {
            sortArray.push(auxillaryArray[i++]);
        }
        else {
            sortArray.push(auxillaryArray[j++]);
        }
    }
    while(i <= middleIndex) {
        animations.push(["comparision1", i, i]);
        animations.push(["comparision2", i, i]);
        sortArray.push(auxillaryArray[i++]);
    }
    while(j <= endIndex) {
        animations.push(["comparision1", j, j]);
        animations.push(["comparision2", j, j]);
        sortArray.push(auxillaryArray[j++]);
    }
    for (let i = startIndex; i <= endIndex; i++) {
        animations.push(["comparision1", i, i - startIndex]);
        animations.push(["overwrite", i, sortArray[i - startIndex]]);
        animations.push(["comparision2", i, i - startIndex]);
        auxillaryArray[i] = sortArray[i - startIndex];
    }
}
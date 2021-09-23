export const selectionSortAnimations = (array: Array<any>) => {
    let animations: Array<any>  = [];
    let auxillaryArray = array.slice();
    selectionSort(auxillaryArray, animations);
    array = auxillaryArray;
    return [animations, array];
}

const selectionSort = (auxillaryArray: Array<number>, animations: Array<any>) => {
    const N = auxillaryArray.length;
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < N; j++) {
            animations.push(["comparision1", j, minIndex]);
            animations.push(["comparision2", j, minIndex]);
            if (auxillaryArray[j] < auxillaryArray[minIndex]) {
                minIndex = j;
            }
        }
        animations.push(["swap", minIndex, auxillaryArray[i]]);
        animations.push(["swap", i, auxillaryArray[minIndex]]);
        swap(auxillaryArray, minIndex, i);
    }
}

const swap = (auxillaryArray: Array<number>, firstIndex: number, secondIndex: number) => {
    let temp = auxillaryArray[firstIndex];
    auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
    auxillaryArray[secondIndex] = temp;
}
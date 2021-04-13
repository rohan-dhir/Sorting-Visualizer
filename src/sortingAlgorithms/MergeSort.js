export const getMergeSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
    }

const mergeSortHelper = (
    primaryArray,
    startIndex,
    endIndex,
    auxiliaryArray,
    animations,
        )  => {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, primaryArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, primaryArray, animations);
    doMerge(primaryArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
    };
    
const doMerge = (
    primaryArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations,
    ) => {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    
    while (i <= middleIndex && j <= endIndex) {
        //Push values to change color
        animations.push([i, j]);

       //Push values again to revert color
        animations.push([i, j]);

        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            primaryArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            primaryArray[k++] = auxiliaryArray[j++];
        }

        }
    while (i <= middleIndex) {
        
        animations.push([i, i]);
        animations.push([i, i]);

        animations.push([k, auxiliaryArray[i]]);
        primaryArray[k++] = auxiliaryArray[i++];
        }
        while (j <= endIndex) {

        animations.push([j, j]);
        animations.push([j, j]);
        
        animations.push([k, auxiliaryArray[j]]);
        primaryArray[k++] = auxiliaryArray[j++];
        }
    };
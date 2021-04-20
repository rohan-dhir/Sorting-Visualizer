export const getQuickSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
   
    quickSort(array, 0, array.length - 1, auxiliaryArray, animations);
    
    return animations;
    }

    const swap = (
        array,
        low,
        high,
        animations,
    ) => {
        

        let temp = array[low];
        array[low] = array[high];
        array[high] = temp;
        animations.push([low, high]);
    };

    const partition = (
        array,
        low,
        high,
        auxiliaryArray,
        animations,
    ) => {
        let pivot = array[Math.floor((high + low) / 2)];
        let k = low;
        let i = low;
        let j = high;
    
        while (i <= j) {
            
            while(array[i] < pivot) {
                i++;
            }
            
            while(array[j] > pivot) {
                j--;
                
            }
            animations.push([i, j]);
            animations.push([i, j]);
            swap(array, i, j, animations);  
            i++;
            j--;
          
        }
        return i;
    };

    const quickSort = (
        array,
        low,
        high,
        auxiliaryArray,
        animations,
    ) => {
        if (high > 1) {
            let index = partition(array, low, high, auxiliaryArray, animations);
            
            if(low < index - 1) {
                quickSort(array, low, index - 1, auxiliaryArray, animations);
            }

            if(index < high) {
                quickSort(array, index, high, auxiliaryArray, animations);
            }
        }
        return array;
    };
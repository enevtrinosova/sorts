const sortArrayOfTwo = (array: number[]): number[] => {
    if (array[0] > array[1]) {
        return [array[1], array[0]];
    }

    return array;
}

const sortArrayOfThree = (array: number[]): number[] => {
    const sortedFirstTwo = sortArrayOfTwo([array[0], array[1]]);

    if (array[2] >= sortedFirstTwo[1]) {
        return [...sortedFirstTwo, array[2]];
    }

    if (array[2] <= sortedFirstTwo[0]) {
        return [array[2], ...sortedFirstTwo];
    }

    return [sortedFirstTwo[0], array[2], sortedFirstTwo[1]];
}

const findPartition = (a: number[]): {array: number[], partition: number} => {
    let lo = 0;
    let i = 1;
    let j = a.length - 1;

    let partition = lo;

    while (i <= j) {
        while (a[i] < a[lo]) {
            i++;
        }

        while (a[j] > a[lo]) {
            j--;
        }

        if (j <= i) {
            let loElem = a[lo];
            a[lo] = a[j];
            a[j] = loElem;

            partition = j;
            break;
        }

        let iElem = a[i];
        a[i] = a[j];
        a[j] = iElem;
    }

    return {
        array: a,
        partition,
    }
}

export const quickSort = (array: number[]): number[] => {
    if (array.length < 2) {
        return array;
    }

    if (array.length === 2) {
        return sortArrayOfTwo(array);
    }

    if (array.length === 3) {
        return sortArrayOfThree(array);
    }

    const { array: arrayWithPartition, partition } = findPartition(array);

    const firstPart = quickSort(arrayWithPartition.slice(0, partition));
    const secondPart = quickSort(arrayWithPartition.slice(partition + 1));

    return [...firstPart, arrayWithPartition[partition], ...secondPart];
}

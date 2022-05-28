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

const mergeTwoArrays = (first: number[], second: number[]): number[] => {
    let i = 0;
    let j = 0;

    const result = [];

    while (i < first.length || j < second.length) {
        if (i === first.length) {
            result.push(second[j]);
            j += 1;
            continue;
        }

        if (j === second.length) {
            result.push(first[i]);
            i += 1;
            continue;
        }

        let firstElement = first[i];
        let secondElement = second[j];

        if (firstElement < secondElement) {
            result.push(firstElement);
            i += 1;
        } else {
            result.push(secondElement);
            j += 1;
        }
    }

    return result;
}

const mergeSort = (array: number[]): number[] => {
    if (array.length < 2) {
        return array;
    }

    if (array.length === 2) {
        return sortArrayOfTwo(array);
    }

    if (array.length === 3) {
        return sortArrayOfThree(array);
    }

    if (array.length % 2 === 0) {
        const firstPart = mergeSort(array.slice(0, array.length / 2));
        const secondPart = mergeSort(array.slice(array.length / 2, array.length));

        return mergeTwoArrays(firstPart, secondPart);
    } else {
        const dividePosition = (array.length - 1) / 2;
        const firstPart = mergeSort(array.slice(0, dividePosition));
        const secondPart = mergeSort(array.slice(dividePosition, array.length));

        return mergeTwoArrays(firstPart, secondPart);
    }
}

// https://leetcode.com/problems/interval-list-intersections/
const intervalIntersection = function(firstList, secondList) {
    let p = 0; // pointer for the first list
    let q = 0; // pointer for the second list

    const result = [];

    while (p < firstList.length && q < secondList.length) {
        const [aLeft, aRight] = firstList[p];
        const [bLeft, bRight] = secondList[q];

        const isCross = aRight >= bLeft && aLeft <= bRight;
        if (isCross) {
            const newCoordinate = [Math.max(aLeft, bLeft), Math.min(aRight, bRight)];
            result.push(newCoordinate);
        }

        if (aRight < bRight) {
            p++;
        } else {
            q++;
        }
    }

    return result;
};

// https://leetcode.com/problems/sort-list/
import {mergeSort} from '../merge-sort';

const sortList = function(head) {
    let array = [];

    while (head !== null) {
        array.push(head.val);
        head = head.next;
    }

    const sortedArray = mergeSort(array);

    if (sortedArray.length < 1) {
        return null;
    }

    let newElem = {
        val: sortedArray[0] || 0,
        next: null,
    };

    const sortHead = newElem;
    let prev = newElem;

    for (let i = 1; i < sortedArray.length; i++) {
        newElem = {
            val: sortedArray[i] || 0,
            next: null,
        };

        prev.next = newElem;
        prev = newElem;
    }

    return sortHead;
};

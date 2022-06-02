// https://leetcode.com/problems/kth-largest-element-in-an-array/
import {findKPartition} from '../merge-sort';

const findKthLargest = (nums, k) => {
    const partition = nums.length - k;
    return findKPartition(nums, partition);
}

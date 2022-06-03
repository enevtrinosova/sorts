// https://leetcode.com/problems/merge-sorted-array/
const merge = function(nums1, m, nums2, n) {
    let p = 0;
    let q = 0;

    while (q < n) {
        const firstElem = nums1[p];
        const secondElem = nums2[q];

        if (p >= m) {
            // вставляем после first
            nums1[p] = secondElem;
            p++;
            q++;
            continue;
        }

        if (secondElem < firstElem) {
            // вставляем перед firstElem
            let rightPart = nums1.slice(p, nums1.length - 1);
            nums1[p] = secondElem;
            const position = p + 1;

            for (let i = 0; i < rightPart.length; i++) {
                nums1[position + i] = rightPart[i];
            }

            q++;
            m++;
        } else {
            // проверяем следующий элемент в first
            p++;
        }
    }
};

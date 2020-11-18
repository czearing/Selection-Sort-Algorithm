/**
 * Swaps two values within in an array.
 *
 * @param data
 * @param firstIndex
 * @param secondIndex
 */
const swap = (data: number[], firstIndex: number, secondIndex: number) => {
  return ([data[firstIndex], data[secondIndex]] = [
    data[secondIndex],
    data[firstIndex]
  ]);
};

/**
 * Sorts a number array via the selection sort algorithm.
 *
 * @param data
 */
export const selectionSort = (data: number[]) => {
  if (data && data.length > 1) {
    let arrayLength = data.length;
    let minIndex;
    for (let outerIndex = 0; outerIndex < arrayLength - 1; outerIndex++) {
      minIndex = outerIndex;
      for (
        let innerIndex = outerIndex + 1;
        innerIndex < arrayLength;
        innerIndex++
      ) {
        if (data[innerIndex] < data[minIndex]) {
          minIndex = innerIndex;
        }
      }
      swap(data, minIndex, outerIndex);
    }
  }
  return data;
};

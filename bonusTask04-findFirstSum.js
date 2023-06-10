arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

const findFirstSum = (arr, total) => {
      if (total > arr[arr.length - 1] + arr[arr.length - 2]) {
            return new Error ('Total is higher than sum of two highest elements of array')
      };

      if (total < arr[0] + arr[1]) {
            return new Error ('Total is lower that sum of two lowest elements of array')
      };

      for(let i = 0; i < arr.length; i++) {
            let searchNumber = total - arr[i];
            for(let j = i + 1; j < arr.length; j++) {
                  if (searchNumber === arr[j]) {
                        return [arr[i], arr[j]]
                  };
            };
      };
};
// O(n^2)
    
      

findFirstSum(arr,total)

console.log(findFirstSum(arr,total))
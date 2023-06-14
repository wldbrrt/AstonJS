// 1) 1, 3, 6, 4, 2, 5
// 2) 1, 3, 2
// 3) abc
// 4) 1 123, 2 123, 3 321, 4 undefined
// 5) 1, 4, 3, 2

// 6)

async function showIndexes (arr) {
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    for(let i = 0; i < arr.length; i++) {
        await delay(3000);
        console.log(i)
    }
}



let array = [10, 12, 15, 21]

showIndexes(array)
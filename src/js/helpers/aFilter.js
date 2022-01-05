export function aFilter(arr, key, mask) {
   return arr.filter((obj) => {
        return obj[key].toLowerCase().includes(mask.toLowerCase())
    });
};

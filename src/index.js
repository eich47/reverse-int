module.exports = function reverse(n) {
    const revertStr = String(Math.abs(n)).split("").reverse().join("");
    return Number(revertStr);
};

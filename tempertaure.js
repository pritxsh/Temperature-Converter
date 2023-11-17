let cel = document.getElementById("cel");
// console.log(cel);
let fah = document.getElementById("fah");
// console.log(fah);

cel.addEventListener("input", function () {
    let c = this.value;
    let fh = (c * (9 / 5)) + 32;
    if (!Number.isInteger(fh)) { // if decimal max numbers needs to be 4 thatswhy used this condition ..same for below function
        fh = fh.toFixed(4);
    }
    fah.value = fh;
})

fah.addEventListener("input", function () {
    // console.log(this.value);
    let fh = this.value;
    let c = (fh - 32) * (5 / 9);
    if (!Number.isInteger(c)) {
        c = c.toFixed(4);
    }
    cel.value = c;
})
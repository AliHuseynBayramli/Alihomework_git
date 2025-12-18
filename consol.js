function a() {

//second one
    let sum = 0;
    let i = 10;

    while (i <= 99) {
        sum += i;
        i++;
    }
    console.log("sum of all 2digit nummbers ", sum);

//first one
   let j = 100;

    console.log("Three-digit numbers ending with 0:");
    while (j <= 999) {
        if (j % 10 === 0) {
            console.log(j);
        }
        j++;
    }
}

a()

function alternatingSums(a) {
    let alternate =[0,0];
    for (let i in a )
    alternate[i%2]+= a[i];
    return alternate.toString();

}
console.log("tong can nang tung team :" +alternatingSums([60,40,55,75,64]));
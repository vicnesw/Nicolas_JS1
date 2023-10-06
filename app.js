//if
var userName = "Nicolas"
if(userName == "Nicolas") {
    console.log("Welcome Nicolas");
}
console.log('Go away Nicolas');

//else
var color = prompt();
if (color == "pink"){
    console.log ("itu warna kusukai");
}else if (color == "red"){
    console.log("itu warna favorit ku")
}else {
    console.log("itu bukan warna kusukai");
}

//Nested_if
var nama = "Nicolas";
password = "rahasia"
if (nama == "Nicolas"){
    if (password ==  "rahasia") {
        console.log("Selamat datang Nicolas");

}

}

//switch
var nama = prompt("masukkan namamu");

if (nama == "Nicolas") {
    console.log ("kamu ganteng dan kaya");
} else if (nama == "hanwen") {
    console.log ("kamu jelek tapi pandai nyanyi");
} else {
    console.log ("apakah itu benar namamu?");
}

switch(nama){
    case "Nicolas":
        console.log("kamu ganteng dan kaya!!");
        //break;
    case "hanwen":
        console.log ("kamu jelek tapi pandai nyanyi!");
        break;
        default:
            console.log ("apakah itu benar namamu?");
}

//for
for (var i = 8; i < 20; i++) {
    console.log (i);
}

// while
var number = 8
while (number < 20) {
    console.log(number);
    number++;
}
console.log ("bagusan dibawah 20")

//do while
var number = 82
do {
    console.log(number);
    number++;
} while (number < 20)
console.log ("bagusan dibawah 20");

// function
function ucapan (nama) {
    console.log("hayu nikah " + nama);
}
var nama = prompt ("siapa namamu?");
ucapan(nama);
//thing.method()
let sal = "you are so grounded"
console.log(sal.toUpperCase())

//original value is unchanged.

let color = "purple    "
console.log(color.trim())

console.log(sal.trim().toUpperCase())

//trim method only removes the spaces at the end and start and spaces in between stays intact.


//thing.method(arg)

let myName = "VivekAnand"
console.log(myName.indexOf("Vivek"))
console.log(myName.indexOf("Anand"))
console.log(myName.indexOf("n"))
console.log(myName.indexOf("s"))
console.log("Winter".indexOf("t"))

//-1 means the thing you are searching for is not there
console.log("VivekAnand".slice(5))
console.log("VivekAnand".slice(5, 8))
console.log("$51.65".slice.apply(1))

//replace method
console.log('ha ha ha'.replace('ha', 'hee'))

//indexof

let name = ['vivek', 'anand', 'winter', 'sal']
console.log(name.indexOf('sal'))

//slice

let nam = ("vivek anand")
console.log(nam.slice(0, 5))
console.log(nam.slice(6))

//Quiz
const age = "5" + "4"
console.log(age)

console.log("pecan pie"[7]) //[7] - index at 7

let song = 'london calling'
song.toUpperCase();
console.log(song)

let userInput = "   TODD@gmail.com"
let cleanedInput = userInput.trim().toLocaleLowerCase();
console.log(cleanedInput)

let park = 'Yellowstone'
const index = park.indexOf('Stone')
console.log = (index)

let yell =('Go Away!!')
let index1 = yell.indexOf('!')
console.log(index1)

console.log('GARBAGE!'.slice(2).replace("B", ''))
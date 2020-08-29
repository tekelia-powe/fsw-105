function capitalizeAndLowercase(string){

var newString = (string.toUpperCase()).concat(string.toLowerCase())

console.log(newString)

}

capitalizeAndLowercase("Hello")

function findMiddleIndex(string){

    var l = string.length
    var mid = Math.floor(l/2)
    console.log(mid)
}

findMiddleIndex("Hello") 
findMiddleIndex("Hello World") 

function returnFirstHalf(string){

    var l = string.length
    var mid = Math.floor(l/2)
    var half = string.slice(0,mid)
    console.log(half)
}

returnFirstHalf("Hello")
returnFirstHalf("Hello World")

function capitalizeAndLowercase2(string){
    
    var l = string.length
    var mid = Math.floor(l/2)
    
    var num = string.slice(0,mid).toUpperCase()
    var num2 = string.slice(mid, string.length).toLowerCase()
    var completeNum = num.concat(num2)

    console.log(completeNum)
}

capitalizeAndLowercase2("Hello")
capitalizeAndLowercase2("Hello World")


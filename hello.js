console.log("hello world")


let temp = 82
let name = "Isse"
console.log(`my name is ${name}`)
console.log(temp)



function isGPA(GPA){
    if (GPA >=0 && GPA <= 4){
    return true
}


    return false

}
console.log(isGPA (4))
console.log(isGPA (-4))
console.log(isGPA (3))
console.log(isGPA (-2))
console.log(isGPA (1))


foods = ['pzza', 'chicken', 'tacos']
foods.forEach(function (food) {
    console.log(food)
});


foods.push("Bariis")
foods.push("Basto")
foods.push("digir and milk")
console.log(foods)

console.log("hello object")

let classInfo = {
    name: "Web programing",
    code: 2560,
    studentsEnrolled: 14,
    days: ["tuesday", "wednesday"]
}

console.log(classInfo)
console.log(classInfo.name)
console.log(classInfo.code)

classInfo.name = "web client and server programing"
    classInfo.studentsEnrolled = 15
    console.log(classInfo["studentsEnrolled"])
    classInfo["code"] = "2560-60"
    console.log(classInfo)

console.log(classInfo["days"])
    let daysArray = classInfo.days
    daysArray.forEach(function(day){
        console.log(day)
})
classInfo.days.push("thursday")
    console.log(classInfo)

let user = {}
    user.name = "Isse"
    user.password = "chelsea"
   user.email = "Issemoh" 
    user.roles = "developer"
    user.office_location = "edina"
    user.contact = "612-707-7186"
console.log(user)





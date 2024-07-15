
//لو عايزه اكتب في فايل
// const fs = require("fs")
// fs.writeFileSync("data1.txt","alaa ahmed")
/////////// لو عايزه اقرء من فايل
// console.log(fs.readFileSync("data1.txt").toString())
// fs.appendFileSync("data1.txt","  alaa ahmed web developer")
// console.log(fs.readFileSync("data1.txt").toString())

// const { require } = require("yargs")

// const { require } = require("yargs")

// const yargs = require("yargs");

// const { require } = require("yargs");

/////////////////////////////////////////////////////
// const x = require("./alldata")
// console.log(x.firstname)
// console.log(x.city)
// console.log(x.lastname)
// console.log(x.fun1(4,5))

/////////////////////////////////////////
// const validator = require('validator');
// console.log(validator.isEmail("alaa@gmailom"))


// console.log(process.argv[2])

//  const x = process.argv[2] 
//  if (x == "add"){
//     console.log("you have add an item")
//  }
//  else if (x=="delete"){
//     console.log("you have delete an item")
//  }
//  else{
//     console.log("error")
//  }

////////////////////////////////////////////////
// const yargs = require("yargs")
// console.log(yargs.argv)


///////////////////////////////////
// console.log(process.argv)
// console.log(process.argv[2])

// const x = process.argv[2]
// if (x == "add"){
//     console.log("you have added an item")
// }
// else if (x == "delete"){
//     console.log("you have delete an item")
// }
// else {
//     console.log("error")
// }

// console.log(process.argv[2])
// const fs =require("fs")
// fs.appendFileSync

/////////////////////////////////////////////

// const yargs = require("yargs")
// const { addperson } = require("./data10")

// console.log(yargs.argv)


// yargs.command({
//     command:"add",
//     describe:"to add an item",
//     builder:{fname:{
//         describe:"this is the describtion of fname",
//        demandOption:true,
//        type : "string"

//     },
//     lname:{
//         describe:"this is the describtion of lname",
//         demandOption:true,
//         type : "string"

//     }},
 
   
//     handler:()=>{
//         console.log("you have added an item")

//     }
// })

// console.log(yargs.argv)


// const x ={
//     fname :"alaa",
//     lname :"ahmed",
//     city :"mansoura"
// }
// console.log(x.city)
// const y = JSON.stringify(x)
// console.log(y)
// const z = JSON.parse(y)
// console.log(z.fname)
// const fs = require("fs")

// fs.writeFileSync("data1.json",y)

const data10 = require("./data10")
const yargs = require("yargs")
const { type } = require("os")


yargs.command({
    command :"add",
    describe:"to add an item",
    handler:(x)=>{
       
        // console.log(x.fname ,x.lname)
        data10.addperson(x.fname , x.lname , x.city,x.age,x.id)

    },
    builder:{
        fname :{
           describe :"this is the fname",
           demandOption :true,
           type :"string"

        },
        lname :{
            describe :"this is the lname",
            demandOption :true,
            type :"string"
 
         }
    }

})

// console.log(yargs.argv)



yargs.command({
    command:"delete",
    describe:"delete an item",
    handler:(x)=>{
        // console.log("you have deleted an item")
        data10.deletedData(x.id)
    }
})

yargs.command({
    command :"read",
    describe:"to read an item",
    builder:{
        id:{
           describe:"this is the id",
           demandOption:true,
           type:"string"

        }

    },
    handler:(x)=>{
        data10.readData(x.id)
    }



})

yargs.command({
    command:"list",
    describe:"to list an items",
    handler:()=>{
     data10.listData()
    }
}

)
yargs.parse()

// console.log(yargs.argv)
/////////////////////////////
// const x = {
//     name : "alaa",
//     city :"mansoura",
//     job :"engineer"
// }
// const y = JSON.stringify(x)
// // console.log(y)
// const z = JSON.parse(y)
// console.log(z)

///////////////////////////////////////////////////////////////////
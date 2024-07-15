

const fs = require("fs")
const addperson = (fname , lname,city,age , id)=>{
    const alldata = loadInfo()
    const duplicateData = alldata.filter((obj)=>{
        return obj.id ==id
    })
    // console.log(duplicateData)
    if(duplicateData.length == 0){

 alldata.push ({
    fname :fname ,
    lname:lname ,
    city :city , 
    age :age  ,
    id :id
})
savealldata(alldata)

}

else{
    console.log("error duplicateData")
}
}

const deletedData = (id)=>{
    const alldata = loadInfo()
    const datatokeep = alldata.filter((obj)=>{
        return obj.id !== id

    })
    // console.log(datatokeep)
    // console.log("you have successfully deleted an item")
    savealldata(datatokeep)
    
}

const readData = (id)=>{
    const alldata = loadInfo()
    const dataNeaded = alldata.find((obj)=>{
        return obj.id == id
    })
//   console.log(dataNeaded)
if (dataNeaded){
    console.log(dataNeaded)
    
}
else{
    console.log("the id needed not found")
}
    
}

const listData = ()=>{
    const alldata = loadInfo()
    alldata.forEach((obj) => {
        console.log(obj.fname , obj.city)
        
    })
}


///////////////////////////////////////////////////////////
loadInfo=()=>{
 try{
    const dataJson = fs.readFileSync("data10.json")
    return JSON.parse(dataJson)
 }
 catch{
    return []
 }
}
////////////////////////////////////////////////////////////
savealldata=(alldata)=>{
    const savealldatajson = JSON.stringify(alldata)
    fs.writeFileSync("data10.json",savealldatajson)
}
//////////////////////
module.exports = {
    addperson ,
    deletedData ,
    readData ,
    listData 
}
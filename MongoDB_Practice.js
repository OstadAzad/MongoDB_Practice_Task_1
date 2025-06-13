// db.test.find({age : {$ne: 15, $lte: 30}}, {age : 1}).sort({age : 1})

//explicit ($and) and explicit ($or) operator practice
// db.test.find({
//     gender: "Female",
//     $or: [
//         { interests: "Cooking" },
//         { interests: "Graming" }
//     ],
//     $and:  [
//         { "skills.name" : "JAVASCRIPT"}
//         ],
//     age: { $gte: 18, $lte: 30 }
// }).project({ age: 1, gender: 1, interests: 1, skills : 1 }).sort({ age: 1 })

//explicit ($or)/($in) operator practice
// db.test.find( 
//     {gender : "Male", 
//     "skills.name" : {$in: ["JAVASCRIPT", "PYTHON"]}}
// ).project({skills : 1}).sort({skills : 1})

//logical operator $not and $nor practice 
// db.test.find({$nor: [
//     {age : 21},
//     {"address.country" : "China"}
//     ]}).project({age : 1, "address.country" : 1}).sort({"address.country": 1})


//$exits, $type, $size operator practice
// db.test.find({friends : {$size: 0}}).project({friends : 1})
// db.test.find({company : {$type : "null"}}).project({company : 1})
//  db.test.find({age : {$exists: true}}).project({age : 1}).sort({age : 1})

//Array Query $all, $elemMatch, $size practice
// db.test.find({interests : ["Cooking", "Writing", "Reading"]}) //array find out
// db.test.find({ "interests.0" : "Cooking"}).project({interests : 1}) //position of velue find out
// db.test.find({friends : {$all: ["Mir Hussain", "Abdur Rakib"]}}).project({friends : 1}) // $all means must have all value according to condition
// db.test.find({
//     skills: {
//         $elemMatch: {
//             name: "JAVASCRIPT",
//             isLearning : true
//         }
//     }
// }).project({skills : 1})//using $elemMatch must be condition apply.

// db.test.find({skills : {$size: 2}}).project({skills : 1}) //using $size 

//using updated operator of $set
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")},{$set:{age : 18}}) //$set keyword change the primitive value

//using updated operator of $addtoset (do not allow dublicate value)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")},{$addToSet: {
//     interests : "Gaming"
// }})

//using updated operator of $push (push allow dublicate value)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")},{$push:{
//     interests : "Gardening"
// }})

//using $unset operator
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, {$unset : { interests : [ "Gaming" ]
// }})

//using $pop operator (single value remove or delete from last position)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, {$pop : {
//     languages : 1
// }})

//using $pop operator (single value remove or delete from first position)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, {$pop : {
//     friends : -1
// }})

//using $pull operator (single value remove or delete from any position) & $pullAll remove one more value as per requirements
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, {$pull : {
//     friends : "Tanmoy Parvez"
// }})

//using $set operator in deep dive (array of object one item changes.)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, {$set : {
//     "education.0.degree" : "Doctor of Civics"
// }})

//using $set operator in deep dive (at a time many field or data changes)
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000065")}, 
//     {$set : 
//     {
//         "education.0.degree" : "Doctor of Civics",
//         "friends.1" : "Azad",
//         "education.1.major" : "Allied Physics",
//         "company" : "GPH ispat"
//     }
// })

//delete operator(delete only one data or id's of data delete by using "deleteOne" operator)
// db.test.deleteOne({_id : ObjectId("6406ad63fc13ae5a40000065")});

//create collection or table
// db.demo.insertMany([
//     {
//     name : "azad",
//     age : 21,
//     company : "Google",
//     designation : "CEO"
//     },
//      {
//     name : "jamil",
//     age : 22,
//     company : "GPH",
//     designation : "Manager"
//     },
//      {
//     name : "Rokan",
//     age : 23,
//     company : "Facebook",
//     designation : "Asst Manager"
//     }
//     ])

//delete collection/table parmanently(demo table)
//before delete please check all collection
// show collections
// db.demo.drop() //demo collection/table deleted.




















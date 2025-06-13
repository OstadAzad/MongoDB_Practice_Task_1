//MongoDB Practice Task#1

//answer: 1
// db.test.find({age : {$gt: 30}}).project({name : 1, email: 1, _id : 0}).sort({name : 1})

//answer: 2 (it is the best practice )
// db.test.find(
//     {favoutiteColor : {$in : ["Maroon", "Blue"]}}, 
//     {favoutiteColor : 1, name : 1, _id : 0}).
//     sort({favoutiteColor : 1})

//or

//answer: 2 (it is not good practice of this answer)
// db.test.find({$or: [
//     {favoutiteColor : "Maroon"},
//     {favoutiteColor : "Blue"}
//     ]}),{favoutiteColor : 1, name : 1, _id : 0}.sort({favoutiteColor : 1})

//answer: 3
// db.test.find({skills : {$eq: []}}, {skills : 1, _id : 0})

//or

//answer: 3
// db.test.find({skills : {$size : 0}}, {skills : 1, _id : 0})

//answer: 4
// db.test.find({$and:  [{ "skills.name" : "JAVASCRIPT"}, { "skills.name" : "JAVA"}]}, {skills : 1, _id : 0}).sort({skills : 1})

//or

//answer: 4
// db.test.find({
//     "skills.name" : {$all : ["JAVASCRIPT", "JAVA"]}
// },
// {"skills.name" : 1, _id : 0}).
// sort({ "skills.name" : 1})

//answer: 5
// db.test.insertOne({ name : "Azad", email : "amccurry3@cnet.com", age : 21, skills : [], languages : ["Bangla", "English", "Arabic"]})
// db.test.updateOne({email : "amccurry3@cnet.com"},{$set:{ skills : {"name" : "Python", "level" : "Beginner", "isLearning" : true}}})
//or
// db.test.updateOne({email : "amccurry3@cnet.com"}, {$push : { skills : {"name" : "Python", "level" : "Beginner", "isLearning" : true} }})
// db.test.find({ email: "amccurry3@cnet.com" })
// db.test.deleteOne({email : "amccurry3@cnet.com"})

//answer: 6
// db.test.updateOne({email : "amccurry3@cnet.com"},{$set : {"languages" : "Spanish"}})
//or
// db.test.updateOne({email : "amccurry3@cnet.com"},{$push : {"languages" : "Spanish"}})
//or
// db.test.updateOne({email : "amccurry3@cnet.com"},{$addToSet : {"languages" : "Spanish"}})

//answer: 7
// db.test.updateMany({"skills.name" : "Kotlin"}, {$pull : {skills : {name : "Kotlin"}}})
//or
// db.test.updateOne({_id : ObjectId("6406ad63fc13ae5a40000066")}, {$pull: {skills : {name : "Kotlin"}}})








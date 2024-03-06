export default function getResponseFromAPI(success){
    return new Promise((resolve,reject)=>{if (success) resolve({status:200});
    reject( Error ("the Api isnt returning"));
});
}
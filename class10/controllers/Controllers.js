const controllers = {
    sample : (request,response)=>{
        console.log("API Hit successfully ...");
        response.send("API Hit...")
    }
}
module.exports = controllers
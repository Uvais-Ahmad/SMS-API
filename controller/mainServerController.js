const axios = require('axios');
let cur = 0;
module.exports.mainServerCont = async function( req , res ){
    try{
        //We get Phone number in Query Params
        let params = req.query.mobileNumber
        //These are the server for sending the msg
        const servers = ['http://localhost:3000/server1',
                        'http://localhost:3001/server2','http://localhost:3002/server3'];

        //Each server calls one by one
        let response = await axios.get(`${servers[cur]}/?mobileNumber=${params}`);
        cur = (cur+1)%servers.length;
        
        return res.status(200).json({
            status : "Success",
            data : {
                sms_status: response.data,
                provider_Request_reports : await providerReport(req.page_visits)
            }
        });
    }
    catch(err){
        console.log("Error ",err);
        return res.status(400).json({message:"Error"})
    }
}

//Use to tell Provider request report
async function providerReport (obj){
    let result = {};
    result.main=obj['/'];
    result.Airtel=obj['/server1/'];
    result.JIO=obj['/server2/'];
    result.VI=obj['/server3/'];
    
    return result;
}
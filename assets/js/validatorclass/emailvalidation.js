
/**
 * This method used to check whether email is already exists in DB
 * 
 * @param {string} email 
 * @returns true/false
 */
async function isEmailExists(email) {
    const dbUsername = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
    const dbPassword = "85e4a7e36372ac1e47c80f4b81a78d62";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    let endPoint = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/";

    const myUrl = endPoint + "cakeshop_user/_find";
    let emailObj =
     {
        selector: 
        {
            email: email
        },
        fields: ["email"]
    };

    
    let res = await axios.post(myUrl, emailObj, { headers: { 'Authorization': basicAuth } });
    
    return res.data.docs.length != 0;
}
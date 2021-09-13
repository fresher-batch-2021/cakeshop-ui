
/**
 * This method used to check whether email is already exists in DB
 * 
 * @param {string} email 
 * @returns true/false
 */
async function isEmailExists(email) {
   
    const url = myUrl + "cakeshop_user/_find";
    let emailObj =
     {
        selector: 
        {
            email: email
        },
        fields: ["email"]
    };

    
    let res = await axios.post(url, emailObj, { headers: { 'Authorization': basicAuth } });
    
    return res.data.docs.length != 0;
}
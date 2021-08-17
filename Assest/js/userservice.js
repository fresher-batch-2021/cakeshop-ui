const dbUsername = "apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx";
const dbPassword = "85e4a7e36372ac1e47c80f4b81a78d62";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
class UserService {
    static login(email, password) {
        
        const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_user/_find";
        const loginObj = {
            selector: {
                email: email,
                password: password

            },
            fields: ["_id", "name", "email"],
        };
        return axios.post(url, loginObj, { headers: { Authorization: basicAuth } });
    }
    static register(regObj) {
        console.log(regObj);
        console.log(basicAuth);
        const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_user";
        return axios.post(url, regObj, { headers: { Authorization: basicAuth } });
    }

}
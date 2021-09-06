
class UserService {
    static login(email, password) {
        
        const url = "https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/cakeshop_user/_find";
        const loginObj = {
            selector: {
                email: email,
                password: password,
                

            },
            fields: ["_id", "name", "email","role"],
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
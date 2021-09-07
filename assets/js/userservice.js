
class UserService {
    static login(email, password) {
        
        const url = myUrl+"cakeshop_user/_find";
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
        const url = myUrl+"cakeshop_user";
        return axios.post(url, regObj, { headers: { Authorization: basicAuth } });
    }

}
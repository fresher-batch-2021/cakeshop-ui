const routes = [
    { path: "register.html" },
    { path: "login.html" },
    { path: "index.html" },
    { path: "occasions.html", roles:["USER"] },
    { path: "product.html", roles:["USER"] },
    { path: "cart.html", roles: ["USER", "ADMIN"] },
    { path: "ordernow.html", roles: ["USER", "ADMIN"] },
    { path: "myorder.html" }

];

 function logout() {
     localstorage.clear();
     window.location.href = "login.html";
 }
function checkAccess(pageName, role) {
    let allowed = false;
    for (let route of routes) 
    {
        if(route.path == pageName)
         {
            if ((!route.roles)||route.roles.includes(role)) 
            {
                allowed = true;
                break;
            }
       }
    }
    return allowed;
}
(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
    console.log("LoggedIn User", user);
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    let allowedAccess = checkAccess(pathName, role);



    if (!allowedAccess) {
        toastr.error("You are not authorized to access this page,Redirecting to login page");
        setTimeout(function()
        {
            window.location.href = "login.html";

        },1500);
    }
})();
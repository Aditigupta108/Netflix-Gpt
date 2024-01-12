
export const checkvalidateSignInform=(email,password)=>{
    //add regex for validation
        const isEmailValid=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
        

        if(!isEmailValid) return "Email is not valid."
        if(!isPasswordValid) return "Password is not valid."
      

        return(null);


    
};
export const checkvalidateSignUpform=(email,password,name)=>{
    //add regex for validation
        const isEmailValid=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
        const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
        const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

        if(!isEmailValid) return "Email is not valid."
        if(!isPasswordValid) return "Password is not valid."
        if(!isNameValid) return "Name is not valid."

        return(null);


    
};
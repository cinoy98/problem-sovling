function signupValidate(res: any, err: any) {
    if (!err) {
        res.json({ message: "Signed up successfully" });
    } else {
        res.json({ message: "Signup Unsuccessful", err });
    }
}
function viewValidate(err: any, results: any, res: any) {
    if (!err) {
        res.json({ message: results });
    }
    else {
        res.json({ message: "error occured", err })
    }
}
function forgotValidate(err:any,res:any,newPassword:string){
    if (!err) {
        res.json({ message: "your password has been reset !!, kindly change the password with the one time password",newPassword},);
    }
    else {
        res.json({ message: "error occured", err });
    }
}
function editValidate(err:any,results:any,res:any){
    if (!err) {
        res.json({ message: results });
    }
    else{
        res.json({message:"ERROR occured",err})
    }
}
export { signupValidate,viewValidate,forgotValidate ,editValidate}
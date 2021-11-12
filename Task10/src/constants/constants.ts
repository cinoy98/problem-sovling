let Secret:string = "top_secret";
let url :string ="mongodb://localhost/cinoy"
let ValidMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.(.[a-z]+)*$/;
let ValidGender= /^(?:m|M|male|Male|f|F|female|Female)$/
let ValidStatus= /^(?:married|single)$/
interface signupInput{
    username: string,
    name:string,
    email: string,
    password: string,
    age: number,
    gender: string,
    address: string,
    phonenumber: string,
    dob: Date,
    fathername: string,
    maritalstatus: string,
}
export {Secret,url,ValidMail,ValidGender,ValidStatus,signupInput}
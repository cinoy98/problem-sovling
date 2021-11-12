let Limit:number =40;
let Host :string= 'localhost';
let User :string= 'root';
let Password :string= '1234';
let Database :string= 'login_module'
let Secret:string = "top_secret";
let ValidMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.(.[a-z]+)*$/;
let ValidGender= /^(?:m|M|male|Male|f|F|female|Female)$/
let ValidStatus= /^(?:married|single)$/
export {Limit,Host,User,Password,Database,Secret,ValidGender,ValidStatus,ValidMail}
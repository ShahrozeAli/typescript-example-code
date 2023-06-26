let message;
message = "abc";

let endsWithC = (<string>message).endsWith("c");
let endsWithC_otherway = (message as string).endsWith("c");


//type assertion do not change type of a variable, it just tell the typescript type of a variable
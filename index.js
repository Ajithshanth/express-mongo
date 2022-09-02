const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
console.log(uuid());
//const uuid = require("uuid");
// console.log(uuid.v4());

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

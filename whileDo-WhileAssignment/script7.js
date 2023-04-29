// WAP that makes the following pattern using console.log():
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
let string = "";
for (let i = 1; i <=6; i++) {
    for (let j = 1; j <= i; j++) {
        string = string + "#";
    }
    string = string + "\n";
}
console.log(string);

var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
var person 
// : {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// }
= {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role:[1, 'author']
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// person.role = [1, 'admin']
if (person.role === Role.ADMIN) {
    console.log('is author');
}

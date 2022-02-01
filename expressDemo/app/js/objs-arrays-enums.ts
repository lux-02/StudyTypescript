enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person
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

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

// person.role = [1, 'admin']


if(person.role === Role.ADMIN){
    console.log('is author')
}
// object literals
// const blogs = [
//   { title: 'mac & cheese rules', likes: 30 },
//   { title: '10 things to make marmite', likes: 50}
// ]

// const person = {
//   name: 'ian',
//   age: 27,
//   email: 'ian@example.com',
//   hobbies: ['league', 'movies', 'eat'],
//   blogs: [
//     { title: 'mac & cheese rules', likes: 30 },
//     { title: '10 things to make marmite', likes: 50}
//   ],
//   login: function()
//   {
//     console.log('user is logged in');
//   },
//   logBlog(){
//     this.blogs.forEach(blog => console.log(blog.title, blog.likes));
//   }
// };

// console.log(person.hobbies);

// person.hobbies[2] = 'not eat';
// console.log(person.hobbies)

// console.log(person['name']);

// person.login();
// person.logBlog();


//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 5.8;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

let random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

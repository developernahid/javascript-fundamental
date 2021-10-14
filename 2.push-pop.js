var friend = ['Facebook, Twitter, Toutube'];
console.log(friend);
console.log(friend.length);
// length diye array te koyta element ache seta dekha hoy.........
friend.push("Linkedin");
friend.push("Pinterest");
console.log(friend);
// Push- Mane array ar sese notun arekta element add kora........
friend.pop();
console.log(friend);
// pop mane array ar sese theke akta element remove kore deya....

friend.unshift("Fiverr");
friend.unshift("Upwork");
console.log(friend);
// unshift mane array ar frist a element add kora.....

friend.shift()
console.log(friend);
// shift mane array ar frist theke element remove kora....

var part = friend.slice(1);
var part2 = friend.slice(1, 2);
console.log(part);
console.log(part2);

// .slice mane koto theke koto no. element pront korte cao seta....
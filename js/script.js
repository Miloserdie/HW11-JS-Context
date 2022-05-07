var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName1 = user.getName.bind(user);
console.log(getName1())

const user1 = {
	age: 5,
	name: 'Vic',
	getName: function() {
	  return this.name;
	}
};
const user2 = {
	name: 'Arni',
}
 
const getName2 = user1.getName.bind(user2);
console.log(getName2())
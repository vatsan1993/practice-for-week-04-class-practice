// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
    );
  }
  static introducePeople(people) {
    if (!Array.isArray(people)) {
      throw new Error('introducePeople only takes an array as an argument.');
    }
    let allArrays = true;
    for (let i = 0; i < people.length; i++) {
      let person = people[i];
      if (!(person instanceof Person)) {
        allArrays = false;
        break;
      }
    }
    if (allArrays) {
      for (let i = 0; i < people.length; i++) {
        let person = people[i];
        person.introduce();
      }
    } else {
      throw new Error('All items in array must be Person class instances.');
    }
  }
}
// let person = new Person('Max', 'Mike');
// let badInput = ['dog', person];
// Person.introducePeople(badInput);
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

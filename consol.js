let User = {
  name: "John",
  age: 30,

  setAge(newAge) {
    this.age = newAge;
  },

  yearsToRetirement() {
    if (this.age < 65) {
      return `Years left until retirement: ${65 - this.age}`;
    } else if (this.age === 65) {
      return "The user will receive retirement this year.";
    } else {
      return "The user is already retired.";
    }
  }
};


User.setAge(40);
console.log(User.yearsToRetirement());


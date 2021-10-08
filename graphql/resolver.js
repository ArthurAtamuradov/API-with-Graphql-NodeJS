const users = [
  {
    name: "Mekan",
    age: 30,
    email: "mekan@mail.ru",
  },
  {
    name: "Maksat",
    age: 23,
    email: "maksat@gmail.com",
  },
];

module.exports = {
  test() {
    return {
      count: Math.ceil(Math.random() * 10),
      users,
    };
  },
  random({ min, max, count }) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const number = Math.random() * (max - min) + min;
      arr.push(number);
    }
    return arr;
  },
  createTestUser({ user: { name, email } }) {
    const user = {
      name,
      email,
      age: Math.ceil(Math.random() * 30),
    };
    users.push(user);
    return user;
  },
};

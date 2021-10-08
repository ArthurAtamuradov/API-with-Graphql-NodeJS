const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    name:String!
    age:Int!
    email:String!
}

type TestType{
    count :Int!
    users:[User!]!
}

type Query{
    test:TestType!
    random(min:Int!,max:Int!,count:Int!):[Float!]!
}

input UserInput {
    name: String!
    email:String!
}

type Mutation{
    createTestUser(user:UserInput!):User!
}
`);

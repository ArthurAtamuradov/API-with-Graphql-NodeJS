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

type Todo{
    id:ID!
    title:String!
    done:Boolean!
    createdAt:String
    updatedAt:String
}

type Query{
    test:TestType!
    random(min:Int!,max:Int!,count:Int!):[Float!]!
    getTodos:[Todo!]!
}

input UserInput {
    name: String!
    email:String!
}

input TodoInput{
    title:String!
    done:Boolean!
}

type Mutation{
    createTodo(todo:TodoInput!):Todo!
    createTestUser(user:UserInput!):User!
    completeTodo(id:ID!):Todo!
    deleteTodo(id:ID!):Boolean!
}

`);

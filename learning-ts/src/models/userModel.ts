import { ObjectId } from "mongodb";
import { mongoClient } from "../utils/dbConfig";
const usersCollections = mongoClient.db("crud").collection("users");

class User {
  email: string;
  firstName: string;
  lastName: string;
  constructor(email: string, firstName: string, lastName: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  async save() {
    const data = await usersCollections.insertOne({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    });

    usersCollections.createIndex({ email: 1 }, { unique: true });
    return data;
  }

  static async create(email: string, firstName: string, lastName: string) {
    const data = await usersCollections.insertOne({
      email,
      firstName,
      lastName,
    });
    await usersCollections.insertOne({ email, firstName, lastName });

    return data;
  }

  static async findById(id: string) {
    return await usersCollections.findOne({ _id: new ObjectId(id) });
  }

  static async find() {
    return await usersCollections.find().toArray();
  }
}

export default User;

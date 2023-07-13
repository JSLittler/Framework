import { connectToUsers, closeConnection } from "./connections";

export const findUser = async (username: string) => {
  try {
    const usersCollection = await connectToUsers();
    
    const query = { name: username };
    const user: any = await usersCollection.findOne(query);

    return {
      _id: user?.id,
      name: user?.name,
      storedPassword: user?.password
    };
  } finally {
    await closeConnection;
  }
};

export const addUser = async (username: string, password: string) => {
  const newUser = {
    name: username,
    password,
  };

  const usersCollection = await connectToUsers();

  const result: any = await usersCollection.insertOne(newUser);

  if (result.insertedCount === 1) {
    return console.dir('Successfully added user.');
  }

  return console.dir('Unable to add user.');
};

export const deleteUser = async (username: string) => {
  try {
    const usersCollection = await connectToUsers();
    
    const query = { name: username };
    const result = await usersCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      return console.dir('Successfully deleted user.');
    }

    return console.dir('No users matched the query. Deleted 0 users.');
  } finally {
    await closeConnection();
  }
};
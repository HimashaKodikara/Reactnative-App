import {Client,Account, ID, Avatars, Databases,Query} from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    Platform:'com.Himasha.aora',
    projectId:'668ea5530039fb32690a',
    databaseId:'668ea82c00144431b6e6',
    userCollectionId : '668ea890002a4d70510f',
    vidoeCollectionId :'668eb415003a0f50453a',
    storageId : '668eb9bc002d63dcd910'
}

const client = new Client();

client.
setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.Platform)


const account  = new Account(client);
const avatars  =new Avatars(client);
const databases = new Databases(client);


//create new user
// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign in user
export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

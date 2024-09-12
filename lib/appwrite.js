import {Client,Account, ID, Avatars,documents, Databases,Query, Storage} from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    Platform:'com.Himasha.aora',
    projectId:'668ea5530039fb32690a',
    databaseId:'668ea82c00144431b6e6',
    userCollectionId : '668ea890002a4d70510f',
    vidoeCollectionId :'668eb415003a0f50453a',
    storageId : '668eb9bc002d63dcd910'
}

const{
  endpoint,
  Platform,
  projectId,
  databaseId,
  userCollectionId,
  vidoeCollectionId,
  storageId,
} = appwriteConfig;
const client = new Client();

client.
setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.Platform)


const account  = new Account(client);
const avatars  =new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);



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
    const currentAccount = await Account();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    //console.log(error);
    return null;
  }
}


export const getAllPosts = async () => {
  try{
    const posts = await databases.listDocuments(
    databaseId,
    vidoeCollectionId
    )

    return posts.documents;
  }catch(error){
    throw new Error(error);
  }
}

export const getLatestPosts = async () => {
  try{
    const posts = await databases.listDocuments(
    databaseId,
    vidoeCollectionId,
    [Query.orderDesc('$createdAt',Query.limit(7))]
    )

    return posts.documents;
  }catch(error){
    throw new Error(error);
  }
}

export async function searchPosts(query) {
  try {
    const posts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.search("title", query)]
    );

    if (!posts) throw new Error("Something went wrong");

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}
export const uploadFile = async(file,type) => {
  if(!file) return;

  const {mimeType, ...rest} = file;
  const asset = {type:mimeType, ...rest};
  
  try{
    const uploadedFile = await storage.createFile(
      storageId,
      ID.unique(),
      asset
    );

    const fileUrl = await getFilePre
  }catch(error){
    throw new Error(error);

  }
}
export const createVideo = async (form) =>{
  try{
 const [thumbnailUrl, videoUrl] = await Promise.all(
  [
    uploadFile(form.thumbnailUrl,'image'),
    uploadFile(form.vidoe,'video'),
  ]
 )
  }catch(error){
    throw new Error(error);
  }
}
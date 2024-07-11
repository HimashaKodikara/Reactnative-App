import {Client,Account, ID, Avatars, Databases} from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    Platform:'com.Himasha.aora',
    projectId:'668ea5530039fb32690a',
    dataabseId:'668ea82c00144431b6e6',
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

export const createUser = async(email,password,username) =>{
  try{
    const newAccount  =await account.create(
  ID.unique(),
  email,
  password,
  username

    )
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username)

    await signIn(email,password);

    const newUser = await databases.createDocument(
      config.dataabseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId:newAccount.$id,
        email,
        username,
        avatar:avatarUrl
      }
    )

    return newUser;
  }catch(error){
    console.log(error);
    throw new Error(error);
  }
}
export async function signIn(email,password){
    try{
  const session =await account.createEmailSession
  (email, password)

  return session;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}
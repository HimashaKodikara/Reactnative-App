import {Client} from 'react-native-appwrite';

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
.setProject('455x3dfkj')
.setPlatform('com.ff')
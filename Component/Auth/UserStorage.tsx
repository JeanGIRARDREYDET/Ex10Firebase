import MMKVStorage,{MMKVLoader, create , useMMKVStorage } from "react-native-mmkv-storage";


const MMKV= new MMKVLoader().initialize();
const UserStorageAuthCreate = (
    user: string,
    password: string
  ) => {
    MMKV.setString("user", user)
    MMKV.setString("password", password)
    return [user,password];
  };

  const UserStorageAuthRead = () => {
    const [user, setUser] = useMMKVStorage("user", MMKV, "");
    const [password, Password] = useMMKVStorage("password", MMKV, "");
    return ({ User: user, Password: password })
  };
  const UserStorageAuthExit = (

  ) => {
UserStorageAuthCreate("","");
    return [true];
  };


  //MMKV.setString("user", "Jean");

const [user, setUser] = useMMKVStorage("user", MMKV, "");
const [password, Password] = useMMKVStorage("password", MMKV, "");



export { UserStorageAuthCreate, UserStorageAuthRead ,UserStorageAuthExit};
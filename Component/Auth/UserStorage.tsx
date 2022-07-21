import MMKVStorage,{MMKVLoader, create , useMMKVStorage } from "react-native-mmkv-storage";


const MMKV= new MMKVLoader().initialize();
type LiteralUnion<T extends U, U = string> = T | (U & {});

export const useStorage = (
  key: LiteralUnion<"user" | "password">,
  defaultValue?: string
) => {
  const [value, setValue] = useMMKVStorage(key, MMKV, defaultValue);
  return [value, setValue];
};
export type HomeStackNavigatorParamList = {
    Home: undefined;
    Details: {
        ID: string,
        Login: string,
        Name: string,
        Password:string,
        Type: "APP" | "WEB",
        complete : string,
        error?: string,
    };
};
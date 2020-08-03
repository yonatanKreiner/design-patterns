import ClientInterface from "./clientInterface";

class Client implements ClientInterface {
    clientPrint(text: string): void {
        console.log(`I except only commas: ${text}`);
    }
}

export default Client;
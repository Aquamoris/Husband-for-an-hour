const baseUrl = 'https://api.telegram.org/bot6405493102:AAFB0iVUkOQfp9vvSF83IBJky3GQrZfOpPQ/'

export const sendRequest = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-4104734422&text=${message}`;

    const response = await fetch(url);

    console.log('SUCCESS', response);
}
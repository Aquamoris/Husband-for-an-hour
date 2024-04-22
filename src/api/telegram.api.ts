const baseUrl = 'https://api.telegram.org/'

export const sendRequest = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?text=${message}`;

    const response = await fetch(url);

    console.log('SUCCESS', response);
}

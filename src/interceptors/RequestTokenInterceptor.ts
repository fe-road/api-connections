const interceptor = (options) => {
    // const currentToken = options.header['jwe-token'];
    // call function to check if token is valid
    const newToken = 'new-token';

    return {
        ...options,
        headers: {
            ...options.headers,
            'jwe-token': newToken,
        },
    };
};

export default interceptor;

const BASE_URL = 'https://dummy.restapiexample.com/api/v1';

const makeCall = (route: string, method = 'GET', body?: any) => {
    return fetch(`${BASE_URL}/${route}`, {
        method,
        body: JSON.stringify(body),
    }).then((response) => {
        if (!response.ok) {
            throw new Error();
        }
        return response.json();
    });
};

export const getEmployees = () => {
    return makeCall('employees');
};

export const getEmployee = (id: string) => {
    return makeCall(`employee/${id}`);
};

export const addEmployee = (name: string) => {
    return makeCall(`create`, 'POST', { name });
};

export const updateEmployee = (id: string, name: string) => {
    return makeCall(`update/${id}`, 'PUT', { name });
};

export const deleteEmployee = (id: string) => {
    return makeCall(`delete/${id}`, 'DELETE');
};

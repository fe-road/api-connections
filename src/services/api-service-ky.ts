import ky from 'ky';

const BASE_URL = 'https://dummy.restapiexample.com/api/v1';

const makeCall = (route: string, method = 'GET', body?: any) => {
    return ky(`${BASE_URL}/${route}`, {
        method,
        json: body,
    }).json();
};

export const getEmployees = () => {
    // return ky(`${BASE_URL}/employees`).json();
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

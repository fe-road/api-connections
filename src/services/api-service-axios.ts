import axios from 'axios';
import RequestTokenInterceptor from '../interceptors/RequestTokenInterceptor';
import { User } from '../models/User';

interface BaseRequest {
    message: string;
    status: string;
}

interface GetEmployeeListRequest extends BaseRequest {
    data: Array<User>;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummy.restapiexample.com/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        'jwe-token': 'user-token',
    },
});

axiosInstance.interceptors.request.use(RequestTokenInterceptor);

export const getEmployees = () => {
    return axiosInstance.get<GetEmployeeListRequest>('employees');
};

export const getEmployee = (id: string) => {
    return axiosInstance.get(`employee/${id}`);
};

export const addEmployee = (name: string) => {
    return axiosInstance.post(`create`, { name });
};

export const updateEmployee = (id: string, name: string) => {
    return axiosInstance.put(`update/${id}`, { name });
};

export const deleteEmployee = (id: string) => {
    return axiosInstance.delete(`delete/${id}`);
};

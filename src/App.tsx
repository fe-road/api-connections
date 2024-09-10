import { useEffect } from 'react';
// import { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } from './services/api-service-vanilla';
// import { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } from './services/api-service-ky';
import { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee } from './services/api-service-axios';

function App() {
    useEffect(() => {
        getEmployees().then((data) => {
            console.log(data);
        });

        // getEmployee('1');
        // addEmployee('Employee Test');
        // updateEmployee('4773', 'New Test name');
        // deleteEmployee('4773');
    }, []);

    return (
        <>
            <h1>API Connections</h1>
            <p>How do they work?</p>
        </>
    );
}

export default App;

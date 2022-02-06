import { useState, useEffect } from 'react';
import axios from 'axios';
import UserIndex from './users/UserIndex';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(function ({ data }) {
                setUsers(data.users);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                //console.log('always exec');
            });  
    }, []);

    return ( 
        <UserIndex users={users} />
     );
}
 
export default Home;
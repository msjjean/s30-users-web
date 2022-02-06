import { useState } from 'react';
import UserIndex from './users/UserIndex';

const Home = () => {
     const [users, setUsers] = useState([
		{
			id: 1,
			name: 'Lee Dokyeom',
			email: 'sample@gmail.com',
		},
		{
			id: 2,
			name: 'Kim Mingyu',
			email: 'sample@gmail.com',
		},
		{
			id: 3,
			name: 'Yoon Jeonghan',
			email: 'sample@gmail.com',
		},
	]);

    return ( 
        <UserIndex users={users} />
     );
}
 
export default Home;
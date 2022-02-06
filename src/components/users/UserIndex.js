const UserIndex = ({users}) => {
  return (
    <div className="wrapper">
      <h1 className="page-title"> All Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th width="40%">Name</th>
            <th width="60%">Email</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user) => (
            <tr className="" key={`user_${user.id}`}>
              <td>{ user.full_name }</td>
              <td>{ user.email }</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}
 
export default UserIndex;
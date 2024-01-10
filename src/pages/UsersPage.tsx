import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

interface User {
  id: number;
  name: string;
  email: string;

}
const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="users">

      <div className="container mx-auto flex flex-col min-h-screen py-8">
      {loading ? <Loader/> : (
        <div className="grow space-y-8">
          <h2 className="text-3xl font-semibold">Список пользователей</h2>
         
            <ul className="list-disc pl-6">
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
                  {user.name} - {user.email}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          )}
       

        <Nav/>

      </div>

    </section>

  );
};

export default Users;


import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Auth } from "../context/AuthContext";


const Nav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth() as Auth;

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  console.log(isLoginPage);
  const goBack = () => {
    navigate(-1);
  };



  return (
    <div className="mt-4">
      <button
        onClick={goBack}
        className="mr-4 bg-gray-300 p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:shadow-outline-gray"
      >
        Назад
      </button>
      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
      >
        Выйти
      </button>
    </div>
  );
};

export default Nav;

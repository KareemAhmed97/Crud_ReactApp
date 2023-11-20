import { logInOut } from "../Store/authSlice";
import { useDispatch,useSelector } from "react-redux";

const Header = () => {
  const { islogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary' type='submit'onClick={()=>dispatch(logInOut())} >
        {islogged ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};

export default Header;
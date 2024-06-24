import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="w-fit p-2 border border-slate-300 rounded-md">
          <Link to="/">메인</Link>
        </li>
        <li className="w-fit p-2 border border-slate-300 rounded-md">
          <Link to="/home">홈</Link>
        </li>
        <li className="w-fit p-2 border border-slate-300 rounded-md">
          <Link to="/home">굿즈</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

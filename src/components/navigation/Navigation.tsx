import { Link } from "react-router-dom";
import list from "../../objects/NavList";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4 tracking-[2px] text-[13px]">
        {list.map((items) => (
          <li key={items}>
            <Link to="">{items}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

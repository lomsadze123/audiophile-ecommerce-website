import { Link } from "react-router-dom";
import list from "../../objects/NavList";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="flex flex-col gap-4 tracking-[2px] text-[13px] md:flex-row md:gap-[34px]">
        {list.map((items) => (
          <li
            className="lg:hover:text-skinColorBold cursor-pointer"
            key={items}
          >
            <Link
              to={items === "HOME" ? "/" : `/category/${items.toLowerCase()}`}
            >
              {items}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;

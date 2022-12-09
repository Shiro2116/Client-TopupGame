import cx from "classnames";
import Link from "next/link";
interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

const Menu = (props: Partial<MenuProps>) => {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <div>
      <li className="nav-item my-auto">
        <Link href={href} className={classTitle} aria-current="page">
          <p>{title}</p>
        </Link>
      </li>
    </div>
  );
};

export default Menu;

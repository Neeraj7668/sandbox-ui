import { pageDropDownList } from "@/constants";
import { DirectionIcon } from "../Icons/Icons";

const PageItems = () => {
  return pageDropDownList?.map((page) =>
    page?.isOptions ? (
      <li className="dropdown dropdown-submenu dropend" key={page.label}>
        <a
          className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
          href={page.route}
          data-bs-toggle="dropdown"
        >
          {page.label}{" "}
         
        </a>
        <ul className="dropdown-menu">
          {page?.children?.map((child) => (
            <li className="nav-item" key={child.label}>
              <a
                className="dropdown-item hover:!text-[#747ed1]"
                href={child.route}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li className="nav-item" key={page.label}>
        <a className="dropdown-item hover:!text-[#747ed1]" href={page.route}>
          {page.label}  
        </a>
      </li>
    )
  );
};

export default PageItems;

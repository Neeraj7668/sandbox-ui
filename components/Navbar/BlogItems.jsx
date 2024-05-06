import { blogList } from "@/constants";

const BlogItems = () => {
  return blogList.map((blog) =>
    blog?.isOptions ? (
      <li key={blog.label} className="dropdown dropdown-submenu dropend">
        <a
          className="dropdown-item hover:!text-[#747ed1] dropdown-toggle"
          href={blog.route}
          data-bs-toggle="dropdown"
        >
          {blog.label}
        </a>
        <ul className="dropdown-menu">
         {blog.children?.map((child)=>(
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
      <li className="nav-item" key={blog.label}>
        <a className="dropdown-item hover:!text-[#747ed1]" href={blog.route}>
          {blog.label}
        </a>
      </li>
    )
  );
};

export default BlogItems;

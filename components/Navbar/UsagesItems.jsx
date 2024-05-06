import { usageDocumentationList } from "@/constants";

const UsagesItems = () => {
  return usageDocumentationList.map((doc) => (
    <div
      className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] max-w-full"
      key={doc.heading}
    >
      <h6 className="dropdown-header !text-[#747ed1]">{doc.heading}</h6>
      <ul className="pl-0 list-none  xl:columns-2 lg:columns-2  xl:pb-1 lg:pb-1">
        {doc.children.map((child) => (
          <li
            className="xl:inline-block xl:w-full lg:inline-block lg:w-full"
            key={child.label}
          >
            <a
              className="dropdown-item hover:!text-[#747ed1]"
              href={child.route}
            >
              {child.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default UsagesItems;

import { elementsDocumentationList } from '@/constants';

const ElementItems = () => {
  return (
    <ul className="pl-0 list-none  xl:columns-3 lg:columns-3 ">
   {elementsDocumentationList.map((ele)=>(
    <li key={ele.label}>
      <a
        className="dropdown-item hover:!text-[#747ed1]"
        href={ele.route}
      >
        {ele.label}
      </a>
    </li>
   )) }
    </ul>
  )
}

export default ElementItems
import { singleProjectsList } from '@/constants';

const SingleProjectItems = () => {
  return singleProjectsList.map((page)=>(
    <li key={page.label}>
    <a
      className="dropdown-item hover:!text-[#747ed1]"
      href={page.route}
    >
     {page.label}
    </a>
  </li>
  ))
}


export default SingleProjectItems
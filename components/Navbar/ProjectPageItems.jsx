import { projectPagesList } from '@/constants';

const ProjectPageItems = () => {
  return projectPagesList.map((page)=>(
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

export default ProjectPageItems
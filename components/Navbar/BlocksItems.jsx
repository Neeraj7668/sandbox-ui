import { blocksList } from '@/constants';
import Image from 'next/image';

const BlocksItems = () => {
  return blocksList?.map((block)=>(
    <li className="xl:px-[15px] xl:mt-[20px] lg:px-[15px] lg:mt-[20px]" key={block.label}>
    <a
      className="dropdown-item"
      href={block.route}
    >
      <div className="rounded img-svg hidden xl:block lg:block p-4 xl:!mb-2 lg:!mb-2">
        <Image
          className="rounded-none"
          src={block.src}
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <span>{block.label}</span>
    </a>
  </li>
  ))
}

export default BlocksItems
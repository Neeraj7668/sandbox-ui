import React from "react";
import Image from "next/image";

import { demoList } from "@/constants";

const DemoItems = () => {
  return demoList?.map((demo) => (
    <li
      className="xl:px-[10px] xl:mt-[10px] lg:px-[10px] lg:mt-[10px]"
      key={demo.label}
    >
      <a className="dropdown-item" href={demo.route}>
        <figure className="!rounded-[.4rem] lift hidden xl:block lg:block">
          <Image
            className="!rounded-[.4rem]"
            src={demo.src}
            srcSet={demo.srcSet}
            alt="image"
            width={1920} 
            height={1080} 
            layout="responsive"
          />
        </figure>
        <span className="xl:hidden lg:hidden">{demo.label}</span>
      </a>
    </li>
  ));
};

export default DemoItems;

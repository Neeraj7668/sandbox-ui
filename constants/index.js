const demoList = [
  {
    label: "Demo 1",
    route: "#",
    src: "/assets/images/mi1.jpeg",
    srcSet: "/assets/images/mi1@2x.jpeg 2x",
  },
  {
    label: "Demo 2",
    route: "#",
    src: "/assets/images/mi2.jpeg",
    srcSet: "/assets/images/mi2@2x.jpeg 2x",
  },
  {
    label: "Demo 3",
    route: "#",
    src: "/assets/images/mi3.jpeg",
    srcSet: "/assets/images/mi1@3x.jpeg 2x",
  },
  {
    label: "Demo 4",
    route: "#",
    src: "/assets/images/mi4.jpeg",
    srcSet: "/assets/images/mi1@4x.jpeg 2x",
  },
  {
    label: "Demo 5",
    route: "#",
    src: "/assets/images/mi5.jpeg",
    srcSet: "/assets/images/mi1@5x.jpeg 2x",
  },
  {
    label: "Demo 6",
    route: "#",
    src: "/assets/images/mi6.jpeg",
    srcSet: "/assets/images/mi1@6x.jpeg 2x",
  },
  {
    label: "Demo 7",
    route: "#",
    src: "/assets/images/mi7.jpeg",
    srcSet: "/assets/images/mi1@7x.jpeg 2x",
  },
  {
    label: "Demo 8",
    route: "#",
    src: "/assets/images/mi8.jpeg",
    srcSet: "/assets/images/mi1@8x.jpeg 2x",
  },
  {
    label: "Demo 9",
    route: "#",
    src: "/assets/images/mi9.jpeg",
    srcSet: "/assets/images/mi1@9x.jpeg 2x",
  },
  {
    label: "Demo 10",
    route: "#",
    src: "/assets/images/mi10.jpeg",
    srcSet: "/assets/images/mi1@10x.jpeg 2x",
  },
  {
    label: "Demo 11",
    route: "#",
    src: "/assets/images/mi11.jpeg",
    srcSet: "/assets/images/mi1@11x.jpeg 2x",
  },
  {
    label: "Demo 12",
    route: "#",
    src: "/assets/images/mi12.jpeg",
    srcSet: "/assets/images/mi1@12x.jpeg 2x",
  },
  {
    label: "Demo 13",
    route: "#",
    src: "/assets/images/mi13.jpeg",
    srcSet: "/assets/images/mi1@13x.jpeg 2x",
  },
  {
    label: "Demo 14",
    route: "#",
    src: "/assets/images/mi14.jpeg",
    srcSet: "/assets/images/mi1@14x.jpeg 2x",
  },
  {
    label: "Demo 15",
    route: "#",
    src: "/assets/images/mi15.jpeg",
    srcSet: "/assets/images/mi1@15x.jpeg 2x",
  },

  {
    label: "Demo 16",
    route: "#",
    src: "/assets/images/mi16.jpeg",
    srcSet: "/assets/images/mi1@16x.jpeg 2x",
  },
  {
    label: "Demo 17",
    route: "#",
    src: "/assets/images/mi17.jpeg",
    srcSet: "/assets/images/mi1@17x.jpeg 2x",
  },
  {
    label: "Demo 18",
    route: "#",
    src: "/assets/images/mi18.jpeg",
    srcSet: "/assets/images/mi1@18x.jpeg 2x",
  },
];

const pageDropDownList = [
  {
    route: "#",
    label: "Services",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "Services 1",
      },
      {
        route: "#",
        label: "Services II",
      },
    ],
  },
  {
    route: "#",
    label: "About",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "About I",
      },
      {
        route: "#",
        label: "About II",
      },
    ],
  },
  {
    route: "#",
    label: "Shop",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "Shop I",
      },
      {
        route: "#",
        label: "Shop II",
      },
      {
        route: "#",
        label: "Product Page",
      },
      {
        route: "#",
        label: "Shopping Cart",
      },
      {
        route: "#",
        label: "Checkout",
      },
    ],
  },
  {
    route: "#",
    label: "Contact",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "Contact I",
      },
      {
        route: "#",
        label: "Contact II",
      },
    ],
  },

  {
    route: "#",
    label: "Career",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "Job Listing I",
      },
      {
        route: "#",
        label: "Job Listing II ",
      },
      {
        route: "#",
        label: "Job Description",
      },
    ],
  },
  {
    route: "#",
    label: "Utility",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "404 Not Found",
      },
      {
        route: "#",
        label: "Page Loader",
      },
      {
        route: "#",
        label: "Sign In I",
      },
      {
        route: "#",
        label: "Sign In II",
      },
      {
        route: "#",
        label: "Sign Up I",
      },
      {
        route: "#",
        label: "Sign Up II",
      },
      {
        route: "#",
        label: "Terms",
      },
    ],
  },
  {
    route: "#",
    label: "Pricing",
    isOptions: false,
    children: [],
  },
  {
    route: "#",
    label: "One Page",
    isOptions: false,
    children: [],
  },
];

const projectPagesList = [
  {
    route: "#",
    label: "Projects I",
  },
  {
    route: "#",
    label: "Projects II",
  },
];

const singleProjectsList = [
  {
    route: "#",
    label: "Single Project I",
  },
  {
    route: "#",
    label: "Single Project II",
  },
  {
    route: "#",
    label: "Single Project III",
  },
  {
    route: "#",
    label: "Single Project IV",
  },
];

const blogList = [
  {
    route: "#",
    label: "Blog without Sidebar",
    isOptions: false,
  },
  {
    route: "#",
    label: "Blog with Sidebar",
    isOptions: false,
  },
  {
    route: "#",
    label: "Blog with Left Sidebar",
    isOptions: false,
  },
  {
    route: "#",
    label: "Blog Posts",
    isOptions: true,
    children: [
      {
        route: "#",
        label: "Post without Sidebar",
      },
      {
        route: "#",
        label: "Post with Sidebar",
      },
      {
        route: "#",
        label: "Post with Left Sidebar",
      },
    ],
  },
];

const blocksList = [
  {
    route: "#",
    label: "About",
    src: "/assets/images/block1.svg",
  },
  {
    route: "#",
    label: "Blog",
    src: "/assets/images/block2.svg",
  },
  {
    route: "#",
    label: "Call to Action",
    src: "/assets/images/block3.svg",
  },
  {
    route: "#",
    label: "Clients",
    src: "/assets/images/block4.svg",
  },
  {
    route: "#",
    label: "Contact",
    src: "/assets/images/block5.svg",
  },
  {
    route: "#",
    label: "Facts",
    src: "/assets/images/block6.svg",
  },
  {
    route: "#",
    label: "FAQ",
    src: "/assets/images/block7.svg",
  },
  {
    route: "#",
    label: "Features",
    src: "/assets/images/block8.svg",
  },
  {
    route: "#",
    label: "Footer",
    src: "/assets/images/block9.svg",
  },
  {
    route: "#",
    label: "Hero",
    src: "/assets/images/block10.svg",
  },
  {
    route: "#",
    label: "Navbar",
    src: "/assets/images/block11.svg",
  },
  {
    route: "#",
    label: "Portfolio",
    src: "/assets/images/block12.svg",
  },
  {
    route: "#",
    label: "Pricing",
    src: "/assets/images/block13.svg",
  },
  {
    route: "#",
    label: "Process",
    src: "/assets/images/block14.svg",
  },
  {
    route: "#",
    label: "Team",
    src: "/assets/images/block15.svg",
  },
  {
    route: "#",
    label: "Testimonials",
    src: "/assets/images/block16.svg",
  },
];

const usageDocumentationList = [
  {
    heading: "Usage",
    children: [
      {
        route: "#",
        label: "Get Started",
      },
      {
        route: "#",
        label: "Forms",
      },
      {
        route: "#",
        label: "FAQ",
      },
      {
        route: "#",
        label: "Changelog",
      },
      {
        route: "#",
        label: "Credits",
      },
    ],
  },
  {
    heading: "Style guide",
    children: [
      {
        route: "#",
        label: "Colors",
      },
      {
        route: "#",
        label: "Fonts",
      },
      {
        route: "#",
        label: "SVG Icons",
      },
      {
        route: "#",
        label: "Font Icons",
      },
      {
        route: "#",
        label: "Illustrations",
      },
      {
        route: "#",
        label: "Backgrounds",
      },
      {
        route: "#",
        label: "Misc",
      },
    ],
  },
];

const elementsDocumentationList =  [
    {
      route: "#",
      label: "Accordion",
    },
    {
      route: "#",
      label: "Alerts",
    },
    {
      route: "#",
      label: "Animations",
    },
    {
      route: "#",
      label: "Avatars",
    },
    {
      route: "#",
      label: "Background",
    },
    {
      route: "#",
      label: "Badges",
    },
    {
      route: "#",
      label: "Buttons",
    },
    {
      route: "#",
      label: "Card",
    },
    {
      route: "#",
      label: "Carousel",
    },
    {
      route: "#",
      label: "Dividers",
    },
    {
      route: "#",
      label: "Form Elements",
    },
    {
      route: "#",
      label: "Image Hover",
    },
    {
      route: "#",
      label: "Image Mask",
    },
    {
      route: "#",
      label: "Lightbox",
    },
    {
      route: "#",
      label: "Media Player",
    },
    {
      route: "#",
      label: "Modal",
    },
    {
      route: "#",
      label: "Pagination",
    },
    {
      route: "#",
      label: "Progressbar",
    },
    {
      route: "#",
      label: "Shadows",
    },
    {
      route: "#",
      label: "Shapes",
    },
    {
      route: "#",
      label: "Tables",
    },
    {
      route: "#",
      label: "Tabs",
    },
    {
      route: "#",
      label: "Text Animations",
    },
    {
      route: "#",
      label: "Text Highlight",
    },
    {
      route: "#",
      label: "Tiles",
    },
    {
      route: "#",
      label: "Tooltips & Popovers",
    },
    {
      route: "#",
      label: "Typography",
    },
  ];


export {
  demoList,
  pageDropDownList,
  projectPagesList,
  singleProjectsList,
  blogList,
  blocksList,
  usageDocumentationList,elementsDocumentationList
};

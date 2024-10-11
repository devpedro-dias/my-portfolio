export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Carreira", link: "#career" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Eu priorizo a colaboração com o cliente e a comunicação clara e objetiva",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou flexível com horários e ambientes",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Meu conhecimento",
    description: "Constantemente aprimorando",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Entusiasta da tecnologia e paixão por entregar experiências ótimas para os usuários",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 lg:col-span-3 md:row-span-1 md:max-w-full max-w-full",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },
  {
    id: 6,
    title: "Quer iniciar um projeto junto?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:col-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SCX Agenciamentos Marítimos",
    des: "Um site de Comércio Exterior, com uma integração com uma API de cotação de moedas.",
    img: "/scx-angular.png",
    iconLists: [
      "/angular-original.svg",
      "/css3-original.svg",
      "/html5.svg",
      "/ts.svg",
    ],
    link: "https://scxagenciamentos.vercel.app/",
  },
  {
    id: 2,
    title: "DEVBarber",
    des: "Um site para uma barbearia, moderno, simples e responsivo. Conta com sistema de agendamentos, usuários e barbeiros. Observação(18/08/2024): Ainda não está 100% finalizado.",
    img: "/devbarber.png",
    iconLists: [
      "/next.svg",
      "/next-auth.svg",
      "/prisma.svg",
      "/postgresql.svg",
      "/docker.svg",
      "/eslint.svg",
      "/tail.svg",
    ],
    link: "https://devbarber-app.vercel.app/",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

export const icons = [
  {
    id: 1,
    name: "Next.Js",
    img: "/next.svg",
    nameImg: "/nextjsName.svg",
  },
  {
    id: 2,
    name: "Typescript",
    img: "/ts.svg",
    nameImg: "/typescript.svg",
  },
  {
    id: 3,
    name: "TailwindCSS",
    img: "/tail.svg",
    nameImg: "/tailwindName.svg",
  },
  {
    id: 4,
    name: "Java",
    img: "/java-original.svg",
    nameImg: "/javaName.svg",
  },
  {
    id: 5,
    name: "Java Spring",
    img: "/spring-original.svg",
    nameImg: "/springName.svg",
  },
  {
    id: 6,
    name: "ReactJS",
    img: "/react-original.svg",
    nameImg: "/reactName.svg",
  },
  {
    id: 7,
    name: "NodeJS.",
    img: "/nodejs-original.svg",
    nameImg: "/nodejsName.svg",
  },
  {
    id: 8,
    name: "JavaScript.",
    img: "/javascript-original.svg",
    nameImg: "/jsName.svg",
  },
  {
    id: 9,
    name: "Angular",
    img: "/angular-original.svg",
    nameImg: "/angularName.svg",
  },
  {
    id: 10,
    name: "SQL DataBase",
    img: "/azuresqldatabase-original.svg",
    nameImg: "/sqlName.svg",
  },
  {
    id: 11,
    name: "CSS3",
    img: "/css3-original.svg",
    nameImg: "/cssName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Web Freelance",
    desc: "Especialista no desenvolvimento de websites personalizados para atender as necessidades específicas de cada cliente, desde páginas simples e informativas até sites modernos, dinâmicos e interativos. Foco em qualidade, experiência do usuário (UX) e design de interface (UI).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Estagiário em Automação",
    desc: "Automação e refatoração de planilhas (Google Sheets) com base em App Script (plataforma baseada em JavaScript), automação do aplicativo do Waze (atualização de eventos e imprevistos), suporte ao munícipe via telefone.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/devpedro-dias",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pedro-corchog/",
  },
];

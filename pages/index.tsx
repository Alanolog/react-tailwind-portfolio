import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillGitlab,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import {
  SiTypescript,
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFreecodecamp,
  SiStyledcomponents,
} from "react-icons/si";
import React from "react";
import axios from "axios";
import { RiReactjsFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import Image from "next/image";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import learning from "../public/learning.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isEnglish, setIsEnglish] = React.useState(false);

  // need to fetch to wake up server for portfolio apps
  React.useEffect(() => {
    axios
      .post("https://alan-rutyna-api.onrender.com/api/v1/auth/login", {
        email: "alan12345@gmail.com",
        password: "secret",
      })
      .then()
      .catch((err) =>
        console.log(
          "don't worry i just wake up server for portfolio apps which causes this 401 for bad request"
        )
      );
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alan Rutyna Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px40 dark:bg-gray-900">
        <section className=" min-h-screen mx-auto">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-2xl font-burtons dark:text-gray-400">
              Alan Rutyna
            </h1>
            <ul className=" flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl dark:text-gray-400"
                />
              </li>
              <li
                onClick={() => setIsEnglish(!isEnglish)}
                className=" cursor-pointer text-2xl dark:text-gray-400 font-burtons "
              >
                {isEnglish ? "PL" : "EN"}
              </li>
                <li>
                  <a
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-4"
                    href={isEnglish ? "./Alan_Rutyna_CV_EN.pdf" : "./Alan_Rutyna_CV.pdf"}
                  >
                    CV
                  </a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10 mx-auto">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-7xl">
              Alan Rutyna
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">
              Junior React Front-End Developer
            </h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-800 md:text-7xl dark:text-gray-100">
            <a
              href="https://github.com/Alanolog"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <AiFillGithub />
            </a>
            <a
              href="https://gitlab.com/Alanolog"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <AiFillGitlab />
            </a>
          </div>
          <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden max-w-full md:w-96 md:h-96">
            <Image alt="avatar" src={avatar} fill className=" object-cover " />
          </div>
        </section>
        <section className="max-w-7xl mx-auto flex flex-col gap-2 justify-center items-center xl:flex-row py-4">
          <div className=" flex flex-col justify-center items-center py-10 xl:border-solid xl:border-2 xl:rounded-lg xl:p-4 xl:max-h-screen xl:h-144 basis-1/3">
            <div>
              <Image
                alt="code icon"
                src={code}
                className=" w-24 h-24 md:w-52 md:h-52"
              />
            </div>
            <h3 className="text-2xl py-1 md:text-4xl dark:text-gray-200 text-center">
              {isEnglish ? "Languages that I use:" : "Programuje przy użyciu:"}
            </h3>
            <ul className=" flex flex-col py-2 gap-4 leading-8 text-gray-800 md:gap-6 md:py-4 md:text-xl dark:text-gray-200">
              <li className=" flex justify-center items-center gap-1">
                <p className="flex justify-center items-center">
                  <SiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                </p>
                <p className=" break-keep">HTML&nbsp;CSS&nbsp;JavaScript</p>
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <RiReactjsFill />
                <SiNextdotjs />
                <SiRedux /> ReactJS&nbsp;Redux&nbsp;NextJS
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <SiTypescript /> TypeScript
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <SiSass />
                <SiTailwindcss /> Sass&nbsp;/&nbsp;Tailwind
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <SiMongodb />
                <SiExpress /> {isEnglish ? "Basic" : "Podstawy"}
                &nbsp;ExpressJS+MongoDB
              </li>
            </ul>
          </div>
          <div className=" flex flex-col justify-center items-center py-10 xl:border-solid xl:border-2 xl:rounded-lg xl:p-4 xl:max-h-screen xl:h-144 basis-1/3">
            <div>
              <Image
                alt="learning icon"
                src={learning}
                className=" w-24 h-24 md:w-52 md:h-52"
              />
            </div>
            <h3 className="text-2xl py-1 md:text-4xl dark:text-gray-200 text-center">
              {isEnglish
                ? "Education & Experience"
                : "Wykształcenie & Doświadczenie:"}
            </h3>
            <ul className=" flex flex-col py-2 gap-4 leading-8 text-gray-800 md:gap-6 md:py-4 md:text-xl dark:text-gray-200">
              <li className=" flex justify-center gap-1 items-center">
                <MdWork className="lg:text-4xl" />
                11.2021 - 11.2022 (13 miesięcy) - Polskie Radio S.A.
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <SiFreecodecamp className="lg:text-4xl" />
                07.2021 - 09.2021 Coders&nbsp;Lab{" "}
                {isEnglish
                  ? "Javascript Developer Bootcamp"
                  : "Kurs JavaScript Developer"}
              </li>
              <li className=" flex justify-center gap-1 items-center">
                <IoIosSchool className="lg:text-4xl" />
                {isEnglish
                  ? "I study weekends in high school"
                  : "W Weekendy uczę się w Liceum Ogólnokształcącym"}
              </li>
            </ul>
          </div>
        </section>
        <section className="max-w-7xl mx-auto">
          <div>
            <div>
              <h2 className=" text-2xl my-5 md:text-4xl dark:text-gray-400 text-center ">
                Portfolio
              </h2>
              <p className=" my-1 md:text-xl dark:text-gray-400 text-center">
                {isEnglish
                  ? "Projects that I have created recently, the code can be seen on "
                  : "Projekty które stworzyłem w niedawnym czasie, kod można zobaczyć na "}
                <a
                  className=" text-teal-600"
                  href="https://github.com/Alanolog"
                  target="_blank"
                  rel="noreferrer"
                >
                  {isEnglish ? "GitHub" : "GitHubie"}
                </a>
                .
              </p>
            </div>
            <div className=" py-10 flex flex-col gap-5 justify-center md:text-xl lg:flex-row lg:flex-wrap lg:gap-16">
              <div className=" flex flex-col gap-1 justify-center items-center max-w-full lg:max-w-[66%]  ">
                <div className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiNextdotjs />
                  <SiTypescript />
                  <SiTailwindcss />
                  <a
                    href="https://alan-rutyna-ecommerce-shop.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600 "
                  >
                    Ecommerce shop
                  </a>
                </div>
                <Image src={web4} alt="Ecommerce shop app" />
              </div>
              <div className=" flex flex-col gap-1 justify-center items-center max-w-7xl basis-1/3">
                <div className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiNextdotjs />
                  <SiTypescript />
                  <SiRedux />
                  <SiSass />
                  <a
                    href="https://task-manager-alanolog.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600 "
                  >
                    Task Manager
                  </a>
                </div>
                <Image src={web1} alt="Task Manager" />
              </div>
              <div className=" flex flex-col gap-1 justify-center items-center max-w-7xl basis-1/3">
                <div className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiMongodb />
                  <SiExpress />
                  <a
                    href="https://alan-rutyna-api.onrender.com/api-docs/#/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600 "
                  >
                    API for Task Manager
                  </a>
                </div>
                <Image src={web2} alt="API for task manager" />
              </div>
              <div className=" flex flex-col gap-1 justify-center items-center max-w-7xl basis-1/3">
                <div className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiNextdotjs />
                  <SiTypescript />
                  <SiTailwindcss />
                  <a
                    href="https://calculator-app-taupe-nine.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600 "
                  >
                    IOS Calculator Copy
                  </a>
                </div>
                <Image src={web3} alt="IOS Calculator App" />
              </div>
            </div>
            <div className=" py-5 md:text-xl">
              <p className=" py-1 dark:text-gray-400 text-center">
                {isEnglish
                  ? "Unfortunately, I can't show the code from the projects in my old job due to the privacy status of repositories, so I only leave links to the production versions."
                  : "niestety kodu z projektów w dawnej pracy nie mogę pokazać z względu na ustawienia prywatności repozytoriów, dlatego jedynie pozostawiam linki do wersji produkcyjnych."}
                <span>
                  {" "}
                  {isEnglish
                    ? "The most challenging projects in which I participated:"
                    : "Największe projekty w których brałem udział:"}
                </span>
              </p>
              <ul className=" list-disc list-inside mt-2 mb-5 md:list-none dark:text-gray-400 text-center">
                <li className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiNextdotjs />
                  <SiTypescript />
                  <SiStyledcomponents />
                  <a
                    href="https://jedynka.polskieradio.pl/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600"
                  >
                    Jedynka Polskiego Radia
                  </a>
                </li>
                <li className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <RiReactjsFill />
                  <SiSass />
                  <a
                    href="https://reportaz.polskieradio.pl/"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600"
                  >
                    Studio Reportażu i Dokumentu Polskiego Radia
                  </a>
                </li>
                <li className="flex gap-2 items-center justify-center text-gray-800 dark:text-gray-200">
                  <SiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                  <a
                    href="https://www.polskieradio.pl/377/9933"
                    target="_blank"
                    rel="noreferrer"
                    className=" text-teal-600"
                  >
                    Muzyczne Źródełko 2022
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className=" py-3 flex justify-center border-t dark: bg-gray-900">
        <h3 className=" text-xl font-burtons font-light dark:text-gray-400 flex gap-1  items-center">
          Alan Rutyna 2022
          <AiOutlineCopyrightCircle />
        </h3>
      </footer>
    </div>
  );
}

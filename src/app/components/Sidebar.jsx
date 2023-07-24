"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarIcon from "../images/sidebar-icon.svg"
const Sidebar = () => {
  let sideBarUrls = [{
    url: '/profile',
    text: 'Profile'
  }, {
    url: '/socials',
    text: 'Socials'
  }, {
    url: '/portfolio',
    text: 'Portfolio'
  }, {
    url: '/resume',
    text: 'Resume'
  }]
  const pathname = usePathname()
  return (
    <aside className="basis-[20%] py-[12px] shadow-3xl sticky">
      <ul className='group'>
        {sideBarUrls.map(sidebar => {
          let { url, text } = sidebar
          return (
            <>
              <li className='relative'>
                <Link href={url} className={`flex py-[12px] px-[24px] items-center text-zink-400 before:content-[""] before:absolute before:border-l-[5px] ${pathname === url ? 'before:border-black' : 'before:border-[transparent]'} before:left-0 before:h-[80%] before:rounded-tr-[8px] before:rounded-br-[8px]' id={isActive ? "active" : ""}><span className='mr-[10px]`}>
                  <img src={sidebarIcon.src} alt="sidebar-icon" />
                  <span className="ml-2"> {text}</span></Link>
              </li >
            </>
          )
        })}

      </ul>
    </aside >
  )
}
export default Sidebar
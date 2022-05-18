import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import type { Link as LinkProps } from './index'

export default function MenuSidebarView({
  links = [],
}: {
  links?: LinkProps[]
}) {
  const { closeSidebar } = useUI()

  return (
    <SidebarLayout handleClose={() => closeSidebar()}>
      <div className={s.root}>
        <nav>
          <ul>
            {links.map((l: any) => (
              <li
                key={l.href}
                className={s.item}
                onClick={() => closeSidebar()}
              >
                <div className="flex justify-between p-2 items-center w-[100%]">
                  <Link href={l.href}>
                    <a>{l.label}</a>
                  </Link>
                  <img src="assets/upperarrow.svg"></img>
                </div>
                <div className=" h-[1px] w-full absolute right-0 bg-[#C9C9C9]"></div>
              </li>
            ))}
            <li className={s.item} onClick={() => closeSidebar()}>
              <div className="flex justify-between p-2 items-center w-[100%]">
                <Link href="/search">
                  <a>Kids</a>
                </Link>
                <img src="assets/upperarrow.svg"></img>
              </div>
              <div className=" h-[1px] w-full absolute right-0 bg-[#C9C9C9]"></div>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4  p-2  absolute bottom-0 right-0 justify-self-end items-center w-[100%]">
          <div className=" h-[1px] w-full absolute top-0 right-0 bg-[#C9C9C9]"></div>
          <img src="assets/marker.svg"></img>
          <Link href="/search">
            <a>English</a>
          </Link>
        </div>
      </div>
    </SidebarLayout>
  )
}

MenuSidebarView

import { NavBarItem } from "./NavBarItem"
import { ColoredNavbarLink } from './ColoredNavbarLink'
import { VisibilityModeButton } from './VisibilityModeButton'
import { useSiteSettings } from '~/utils/store'
import { useCallback } from "react"


export const NavBar = () => {

    const linkItmes = ["about", "blog", "projects"];
    const linkTitles = linkItmes.map(linkItem => linkItem.charAt(0).toUpperCase() + linkItem.slice(1,))
    const {
        mode
      } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
      )

    return (
        <nav className={`px-4 row-span-2 pt-2 w-[75%] h-fit grid grid-cols-8 gap-4 w-full ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}> 
            <div className="font-sans flex items-center-justify-center col-span-3">
                <ColoredNavbarLink 
                    link={''} 
                    title={'Ada Lündhé'}
                    size="text-[5.7vmin]"
                    onInView={false}
                />
            </div>
            <div className="flex items-center justify-between text-[3vmin] col-span-4 font-serif">
            {
                linkItmes.map((linkItem, idx) => 
                    <div key={`nav-${linkItem}`} className="w-full flex justify-center">
                        <NavBarItem 
                            link={linkItem} 
                            title={linkTitles.at(idx) as string}
                        />
                    </div>
                )
            }
            </div>
            <div className="flex items-center justify-center font-serif">
                <VisibilityModeButton/>
            </div>
        </nav>
    )
}
import { NavBarItem } from "./NavBarItem"
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
    <nav className={`row-span-2 py-4 w-[75%] h-fit grid grid-cols-8 gap-4 w-full ${mode === 'light' ? 'text-[#212121]' : 'text-[#BDBDBD]'}`}> 
        <div className="font-sans text-[3.5vw] flex items-center-justify-center col-span-3">
            <NavBarItem 
                link={''} 
                title={'Ada Lündhé'}
            />
        </div>
        <div className="flex items-center justify-between text-[2.25vw] col-span-4 font-serif">
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
        <div className="flex items-center font-serif">
             <VisibilityModeButton/>
        </div>
    </nav>
    )
}
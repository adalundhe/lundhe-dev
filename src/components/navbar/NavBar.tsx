import { NavBarItem } from "./NavBarItem"

export const NavBar = () => {

    const linkItmes = ["resume", "blog", "about"];
    const linkTitles = linkItmes.map(linkItem => linkItem.charAt(0).toUpperCase() + linkItem.slice(1,))

    return (
    <nav className="w-[75%] h-fit px-8 flex justify-between"> 
        <div key={`nav-home`} className="font-sans text-[3.5vw] flex items-center-justify-center">
            <NavBarItem 
                link={'home'} 
                title={'Ada Lundhe'} 
                textType="header"
            />
        </div>
        <div className="flex items-center justify-between w-1/2 text-[2.5vw]">
        {
            linkItmes.map((linkItem, idx) => 
                <div key={`nav-${linkItem} mx-4 flex items-center justify-center`}>
                    <NavBarItem 
                        link={linkItem} 
                        title={linkTitles.at(idx) as string}
                    />
                </div>
            )
        }
        </div>
    </nav>
    )
}
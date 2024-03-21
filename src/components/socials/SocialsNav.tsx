import { ReactElement, useCallback } from "react";
import { SocialsLink } from "./SocialsLink";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useSiteSettings } from "~/utils/store";


type SocialPlatform = {
    link: string;
    name: string;
    icon: ReactElement
}


export const SocialsNav = () => {

    const socials: Array<SocialPlatform> = [
        {
            name: "twitter",
            link: "https://twitter.com/sc_codeum",
            icon: <FaTwitterSquare/>
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/ada-lündhé-574a5321",
            icon: <FaLinkedin/>
        },
        {
            name: 'github',
            link: "https://github.com/adalundhe",
            icon: <FaGithubSquare/>
        }
    ]

    const {
        mode
    } = useSiteSettings(
        useCallback((state) => ({
            mode: state.visibilityMode
        }), [])
    )

    return (
        <div className="row-span-6 grid grid-cols-10">
          <div className="col-span-3"></div>
          <div className={
            `col-span-4 grid grid-cols-3 ${mode === 'light' ? ' text-[#212121]' : 'text-[#BDBDBD]'}`
          }>
            {
                socials.map(platform =>
                
                    <div 
                        className="flex justify-center"
                        key={`social-link-${platform.name}`}
                    > 
                      <SocialsLink
                        link={platform.link}
                        icon={platform.icon}
                      />  
                    </div>
                )
            }
          </div>
          <div className="col-span-3"></div>
        </div>
    )

}
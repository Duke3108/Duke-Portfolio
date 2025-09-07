import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaFacebook, FaDiscord} from "react-icons/fa"

const socials = [
    {icon: <FaGithub/>, link: ""},
    {icon: <FaLinkedinIn/>, link: ""},
    {icon: <FaFacebook/>, link: ""},
    {icon: <FaDiscord/>, link: ""},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link key={index} href={social.link} className={iconStyles}>
                {social.icon}
            </Link>
        ))}
    </div>
  )
}

export default Social
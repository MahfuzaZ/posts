import React from 'react'
import sass from "../main.module.scss"
import img1 from "../img/post1.png"
import img2 from "../img/post2.jpeg"
import img3 from "../img/post3.png"
import img4 from "../img/post4.png"
import img5 from "../img/post4.jpeg"
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function Home() {
  const {darkMode, setDarkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `dark ${sass.home}` : `${sass.home}`}>
      <img className={sass.img} src={img5} alt="" />
       <ul>
        <li><img src={img3} alt="" /><p>In 2003, An Post set up a new division to run its post office and transaction services business, entitled An Post Transaction Services or PostTS. It rebranded its post offices network as "Post Office" or "Oifig an Phoist" with a new, white-and-red logo, and introduced banking services in conjunction with Allied Irish Banks. </p></li>
        <li><p>Jointly established by An Post and Ordnance Survey Ireland, Geodirectory is a service that provides a database of buildings and addresses in Ireland, as well as their geolocation details.[13] It holds records for 2.2 million properties that receive post.</p><img src={img2} alt="" /></li>
        <li><img src={img4} alt="" /><p>On 5 October 2006 An Post signed an agreement for the creation of a joint venture with Fortis to provide financial services through the Post Office network. This joint venture with BNP Paribas was created to offer financial products and services to the Irish market, including daily banking, savings products, insurance, mortgages, and credit cards.</p></li>
       </ul>
    </div>
  )
}

export default Home
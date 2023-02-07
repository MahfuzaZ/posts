import React from 'react'
import sass from "../main.module.scss"
import img1 from "../img/post3.png"
import img2 from "../img/post5.webp"
import img3 from "../img/post6.webp"
import img4 from "../img/post4.jpeg"
import img5 from "../img/post5.webp"
import img6 from "../img/post7.png"
import { themeContext } from '../../components/Context'
import { useContext } from 'react'

function About() {
  const {darkMode, setdarkMode} = useContext(themeContext)
  return (
    <div className={darkMode ? `dark ${sass.about}` : `${sass.about}`}>
       <div className={sass.img}>
       <img src={img1} alt="" />
       <img src={img2} alt="" />
       <img src={img3} alt="" />
       <img src={img4} alt="" />
       <img src={img5} alt="" />
       <img src={img6} alt="" />

       </div>
        <p>An Post, the Irish postal administration, came into being in 1984 when, under the terms of the Postal & Telecommunications Services Act of 1983, the Post Office services of the Department of Posts and Telegraphs (P&T) were divided between An Post and Telecom Éireann, the telecommunications operator now called Eir. At its inception, during the early years of the Irish Free State, the Department of Posts and Telegraphs was the country's largest department of state, and its employees (most of them postmen) constituted the largest sector of the civil service.<br/><br/>

Prior to this, the Post Office in Ireland had been under the control of various Postmasters General, Irish and British, with the appointment of Evan Vaughan as postmaster in Dublin in 1638, generally accepted as the date for the establishment of a semi-formal postal system in Ireland.Oliver Cromwell's Postal Act of 1657 created a combined General Post Office for the three kingdoms of Ireland, Scotland, and England; the position was affirmed by Charles II and his parliament by the Post Office Act of 1660. <br/> <br/>  As of 2020, An Post remains one of Ireland's largest employers but it has undergone considerable downsizing. In 2020, Munster's only sorting centre in Little Island, Cork closed.[citation needed] The closure of individual branches in rural areas has become a significant political issue. <br/> <br/> In 2014, all parts of An Post made a profit for the first time in eight years.[3] As of 2018 there were approximately 1,100 An Post offices and over 100 postal agents across Ireland.[4]

The Irish government announced the introduction of a postcode system, Eircode, in Ireland from 2008 though An Post was against the system at the time, saying it was unnecessary. The introduction of the postcode system took place on 13 July 2015, after almost a decade of delays.

All parcel post arriving in Ireland passes through An Post's mail centre in Portlaoise, where customs officials are on duty to inspect it.

An Post adopted its current logo on 14 December 2018; it did not make its first appearance until 13 March 2019.[citation needed] On branded signage, individual post offices are labelled Oifig an Phoist or (in English) 'Post Office'.</p>
    </div>
  )
}

export default About
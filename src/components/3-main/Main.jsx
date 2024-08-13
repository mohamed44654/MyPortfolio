// @ts-nocheck
import React, { useState } from 'react';
import "./main.css";
import { motion ,AnimatePresence } from 'framer-motion';



const myProjects=[
  {
    projectTitle:"BakeShop", 
    subTitle:"Introduction website for a bakery" ,
    link:"https://nourankamal.github.io/Bakeshop/" ,
    github:"https://github.com/NouranKamal/Bakeshop",
    category: "css",
    imgPath:"./1.jpg"
  },
  {
    projectTitle:"Fokir", 
    subTitle:"A ui website is personal project" , 
    link:"https://nourankamal.github.io/Fokir/" ,
    github:"https://github.com/NouranKamal/Fokir",
    category: "css",
    imgPath:"./2.jpg"
  },
  {
    projectTitle:"Mealify",
    subTitle:"Introduction website for a restaurant" , 
    link:"https://nourankamal.github.io/Mealify/" ,
    github:"https://github.com/NouranKamal/Mealify",
    category: "css",
    imgPath:"./3.png"
  },
  {
    projectTitle:"DevFolio",
    subTitle:"A ui website is personal project" ,
    link:"https://nourankamal.github.io/DevFolio/" ,
    github:"https://github.com/NouranKamal/DevFolio", 
    category: "css", 
    imgPath:"./4.jpg"
  },
  {
    projectTitle:"Daniels",
    subTitle:"A ui website is personal project" ,
    link:"https://nourankamal.github.io/Daniels/",
    github:"https://github.com/NouranKamal/Daniels",
    category: "css",
    imgPath:"./5.jpg"
  },
  {
    projectTitle:"Quote App", 
    subTitle:"A website shows you a random quotes every time you press the button" ,
    link:"https://nourankamal.github.io/QuoteApp/" ,
    github:"https://github.com/NouranKamal/QuoteApp",
    category: "js",
    imgPath:"./6.png"
  },
  {
    projectTitle:"Login System",
    subTitle:"A website is a system for creating an account and logging in through it to reach the welcome page" ,
    link:"https://nourankamal.github.io/Smart-Login-System/" ,
    github:"https://github.com/NouranKamal/Smart-Login-System", 
    category: "js",
    imgPath:"./7.jpg"
  },
  {
    projectTitle:"Bookmark",
    subTitle:"A website for adding any website that have a name and link , I can delete any website or make any view link of website" ,
    link:"https://nourankamal.github.io/Bookmark/" , 
    github:"https://github.com/NouranKamal/Bookmark",
    category: "js",
    imgPath:"./8.jpg"
  },
  {
    projectTitle:"CRUD",
    subTitle:"A website for adding products that have a name , category , price and description , I can search for them and delete any product" ,
    link:"https://nourankamal.github.io/CRUD/" ,
    github:"https://github.com/NouranKamal/CRUD",
    category: "js", 
    imgPath:"./09.png"
  },
  {
    projectTitle:"Weather App",
    subTitle:"A website to determine the weather for 3 days by specifying your location and the country in which you are located" ,
    link:"https://nourankamal.github.io/Weather-App/", 
    github:"https://github.com/NouranKamal/Weather-App", 
    category: "js",
    imgPath:"./10.jpg"
  },
  {
    projectTitle:"Yummy",
    subTitle:"A website for all kinds of foods and the way thay are prepared in different countries around the world" ,
    link:"https://nourankamal.github.io/yummy/" , 
    github:"https://github.com/NouranKamal/yummy", 
    category: "js", 
    imgPath:"./11.png"
  },
  {
    projectTitle:"ShopShow",
    subTitle:"An e-commerce website for shopping in different categories and brands , you can select the product you like in a list and you can add it in cart and purchase visa card and view all orders" , 
    link:"https://github.com/NouranKamal/ShopShow", 
    github:"https://github.com/NouranKamal/ShopShow", 
    category: "react", 
    imgPath:"./12.jpg"
  },
]

export default function Main() {
  const[currentActive,setCurrentActive]=useState('all');
  const[arr,setArr]=useState(myProjects);
  const handlClick =(buttonCategory)=>{
    setCurrentActive(buttonCategory);
          const newArr = myProjects.filter((item)=>{
            return item.category === buttonCategory
          })
          setArr(newArr) 
  }

  return (
    <main className='flex'>
      <section className='leftSection'>
        <button onClick={()=>{setCurrentActive("all") , setArr(myProjects)}} className={currentActive==="all"? 'active' : null}>All Projects</button>
        
        <button onClick={()=>{handlClick("css")}}className={currentActive==="css"? 'active' : null}>HTML & CSS</button>

        <button onClick={()=>{handlClick("js")}} className={currentActive==="js"? 'active' : null}>JavaScribt</button>
        
        <button onClick={()=>{handlClick("react")}} className={currentActive==="react"? 'active' : null}>React</button>
      </section>

      <section className='rightSection'>
      <AnimatePresence>
       {arr.map((item) => {
        return <motion.div 
        layout
          initial={{transform:"scal(0)"}}
          animation={{transform:"scal(1)"}}
          transition={{type:"spring", damping:8}}
          
        key={item.imgPath} className='card'>
          
         <div>
         <img src={item.imgPath} width={266} height={200} alt="" />
         </div>
         <div className="box" style={{width:"266px"}} >
           <h3 className='title'>{item.projectTitle}</h3>
           <p className='subTitle'>{item.subTitle}</p>
           <div className='icons flex'>
          <div className='flex' style={{gap:"11px"}}>
          <div> <a className='icon-link' target='_blank' href={item.link}></a> </div>
          <div> <a className='icon-github' target='_blank' href={item.github}></a></div>
          </div>
           <a className='flex link' href="">more
             <span className='icon-arrow-right' style={{alignSelf:'end'}}></span>
           </a>
         </div>
         </div>
       </motion.div>
       })} 
      </AnimatePresence>
      </section>

    </main>
  )
}

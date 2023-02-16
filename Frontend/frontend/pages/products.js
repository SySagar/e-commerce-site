import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function products() {

  const [props,setProp] = useState(null)
  useEffect( ()=>{
    let headers = {Authorization : "Bearer 6f4088c1393b66edac1096b4cd6c28a120ffde6c933bde95faac7a5ba97cee77aeead75935808668630c2b0a431ab1708fee68fd92822926ad949e5f04daf0e630a68fe3019949cd5591cda1464f3b4562320d3a224c5eb54ace65649de2ec01eb2d98c6985c73a105267f131329d12d9ac47069e2fb3ba7020752023106f323"}
    // const a = await fetch("http://127.0.0.1:1337/api/products?populate=*",{headers : headers})
  
      const url = "http://127.0.0.1:1337/api/products?populate=*"
    const res=  axios.get(url,headers).then((res)=>{setProp(v => res.data)})
  
   console.log(res.data);
  
  //  setProp(res.data)
   
   console.log("my propd: "+props);
  },[]
  )
 


  return (
    <div className="container mx-auto px-4">
      <section class="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Products List - MyShop</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
     
    </div>
    <div class="flex flex-wrap -m-4">
    {props && props.data.map((item)=>{
        return (
      <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-96 rounded m-auto mb-8" src={item.attributes.Image.data && "http://localhost:1337"+item.attributes.Image.data.attributes.formats.large.url} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
          <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
          <p className="leading-relaxed text-base"> {item.attributes.description}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
    })}
    </div>
  </div>
</section>
    </div>
  )
}

// export async function getServerSideProps(context) {
//     let headers = {Authorization : "Bearer 6f4088c1393b66edac1096b4cd6c28a120ffde6c933bde95faac7a5ba97cee77aeead75935808668630c2b0a431ab1708fee68fd92822926ad949e5f04daf0e630a68fe3019949cd5591cda1464f3b4562320d3a224c5eb54ace65649de2ec01eb2d98c6985c73a105267f131329d12d9ac47069e2fb3ba7020752023106f323"}
//     const a = await fetch("http://127.0.0.1:1337/api/products?populate=*",{headers : headers})

// //     const url = "http://127.0.0.1:1337/api/products?populate=*"
// //   const res=  await  axios.get(url,headers)
  
// //  console.log(res.data);

    
//     let products = await a.json();
//     console.log(products);
//     console.log("testing")
//     return {
//       props: {products:products}, // will be passed to the page component as props
//     }
//   }

import React from 'react';
import "./landing.css";


export default function landing(){
   return(
   

<section className="overflow-hidden bg-[url(https://images.pexels.com/photos/8035298/pexels-photo-8035298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        ONLINE LIBRARY
      </h2>

      <p
        className="text-center hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
        Welcome to our Online Library – your gateway to a world of knowledge, imagination, and endless possibilities. Explore a vast collection of digital books, articles, and resources from the comfort of your own device. Whether you're a student, a book lover, or a lifelong learner, our online library is here to enrich your mind and fuel your curiosity. Dive into the virtual shelves, discover new worlds, and embark on a literary journey like no other. Start your exploration today!.
      </p>

      <div className="mt-4 sm:mt-8">
        <a
          href="https://forms.gle/dVKrruyKvH4am8Y36"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Publish Your Book With Us 
        </a>
      </div>
    </div>
  </div>
</section>
   );
}
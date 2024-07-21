import React from 'react'

export default function About() {
    return (
        <div className="py-10 bg-white">
            <div className="container m-auto px-3 text-gray-600  xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 ">
                    <h2 className='text-2xl font-bold text-fuchsia-950 '>Hello, Myself Bhola Das</h2>
                    <h2 className='text-4xl font-bold text-orange-950 mb-2'>I am a Software Devloper</h2>
                    <h2> I have honed my skills in <strong>Cpp,Python,Java,Javascipt</strong>, and I am proficient in <strong>frameworks like React, Node.js</strong>. My professional journey has allowed me to work on diverse projects, from <strong>developing e-commerce platforms</strong> to <strong>creating scalable web applications</strong>, enabling me to develop a versatile skill set.</h2>
                    <h2 className='mt-2'> I am proud of my achievements, such as <strong>leading a team to improve Ensemble Clustering </strong>, and I am always eager to take on new challenges that push the boundaries of my capabilities. In addition to my technical expertise, I value teamwork, continuous learning, and creative<strong> problem-solving</strong>.</h2>
                    <h2 className='mt-2'>When I'm not working, I enjoy <strong>coding for open-source projects, playing chess, and hiking</strong>, which help me stay balanced and inspired. I am always open to connecting with like-minded professionals and exploring new opportunities</h2>
                    </div>
                </div>
            </div>
        </div>
    );
  }
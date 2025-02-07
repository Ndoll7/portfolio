import React from 'react'

const skills = () => {
  return (
    <div id='skills' className='container pt-32'>
       <div className='grid md:grid-cols-2 gap-20 items-center'>
           <div data-aos="zoom-in-up">
             <h2 className='text-4xl md:text-5xl'>Technologies I Work With </h2>
             <p className='text-gray-500 pt-2'>
              I have a solid foundation in web development,specializing in HTML in CSS and JavaScript.My experience extands to my frameworks like React and Nextjs to create dynamic and user-friendly applications.I&apos;m also proficient in Tailwind CSS for efficient styling and design.With a passion for learning.I stay updated on the latest technologies to enhance my skills set and contribute effectively to projects.</p>
          </div>
          <div>
          <div className='grid grid-cols-2 text-cyan-500 text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                          <h2 data-aos="zoom-in-up">TypeScript</h2>
                          <h2 data-aos="zoom-in-up">React.js</h2>
                          <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                        <div className='space-y-2'>
                           <h2 data-aos="zoom-in-up">Tailwind</h2>
                           <h2 data-aos="zoom-in-up">CSS</h2>
                           <h2 data-aos="zoom-in-up">Node.js</h2>
                        </div>
                        
            </div>
          </div>
       </div>
    </div>
  )
}

export default skills

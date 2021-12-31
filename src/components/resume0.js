import React, { Component } from 'react';
import Skills from './Skills';

export default class Header extends Component {
  render() {
    return (
      <section id="resume">


         {/* Education
        ----------------------------------------------- */}
         <div className="row education">
           <div className="three columns header-col">
             <h1><span>Education</span></h1>
           </div>
           <div className="nine columns main-col">
             <div className="row item">
               <div className="twelve columns">
                 <h3>University of Waterloo </h3>
                 <p className="info">Computer Engineering<span>•</span> <em className="date">Sept. 2019 - May 2022</em></p>
                 <p>
                    Relevent Courses: <br/>
                    System Programming and Concurrency, Embedded Microprocessor Systems, Algorithms and Data Structures, Compliers,
                    Probability theory and statistics  and Numerical Methods

                 </p>
               </div>
             </div>
           </div>
         </div>
         {/* Work*/}
         <div className="row work">
           <div className="three columns header-col">
             <h1><span>Work</span></h1>
           </div>
           <div className="nine columns main-col">
             <div className="row item">
               <div className="twelve columns">
                 <h3>Cognizantly inc.</h3>
                 <p className="info">Lead Software Developer <span>•</span> <em className="date">Sept 2020 - December 2020</em></p>
                 <p>
                 • Developed a full-stack application to display behavior analytics of traders using the Plaid API, with Flask framework and JavaScript for the frontend <br/>
                 • Designed a NoSQL backend layout using Firebase to ensuring data flow was clear and scalable for the future <br/>
                 • Containerized development with Docker to ensure the development was standardized <br/>
                 • Correlated trading data to find patterns using Jupyter notebook, which will aid in optimizing user efforts <br/>
                 </p>
               </div>
             </div> {/* item end */}
             <div className="row item">
               <div className="twelve columns">
                 <h3>Nuclear Promise X</h3>
                 <p className="info">Nuclear Software Developer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                 <p>
                 
                 • Created Full Stack applications using Powerapps with Sharepoint/SQl and Reactjs with Nodejs/Flask <br/>
                 • Designed a Java Rich Client Application using SWT libraries to generate and log documentation files <br/>
                 • Created predictive scripts using Natural Language Processing (Lemmatization and Word-Encoding)<br/>
                 • Automated testing using RPA bot with UIPath to reduce testing time by 60 % <br/>
                 • Developed and presented an initial Etheruem supply chain Dapp using truffle suite with Nodejs <br/>
                 </p>
               </div>
             </div> {/* item end */}
             <div className="row item">
               <div className="twelve columns">
                 <h3>National Bank Financial</h3>
                 <p className="info">Electronic Trading IT Analyst <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                 <p>
                 • Developed Python scripts to automate <br/>
                      ▪ Web scraping/ Automation with Selenium reducing time-consuming tasks <br/>
                      ▪ MySQL server data updates to ensure accurate data and manage records <br/>
                      ▪ Extraction and manipulation of various data for pattern matching <br/>
                 • Created multiple PowerShell scripts to automate tasks and expand past scripts <br/>
                 • Constructed several SQL queries and improved performance of existing SQL scripts <br/>
                 • Created Excel Macros in VBA to improve efficiencies in banking procedures and document processing <br/>
                 </p>
               </div>
             </div> {/* item end */}

             <div className="row item">
               <div className="twelve columns">
                 <h3>National Bank Financial</h3>
                 <p className="info">Electrical Sub Team Member<span>•</span> <em className="date">March 2007 - February 2010</em></p>
                 <p>
                 • Used Eagle to create the schematic and board layout for an Arduino shield used in the pod <br/>
                 • Assisted in carrying out battery testing to ensure device information and usage was correct
                 </p>
               </div>
             </div> {/* item end */}

             <div className="row item">
               <div className="twelve columns">
                 <h3>TD Bank</h3>
                 <p className="info">Automation Controller/Access Analyst <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                 <p>
                 • Created a database in Microsoft Access using SQL queries and VBA to set up a system to log process changes improving communication <br/>
                 • Optimized scheduling of processes and created Python scripts increase overall efficiency <br/>
                 • Created functions using Blue Prism to automate various bank-related tasks <br/>
                 • Wrote test cases for processes along with testing additional processes
                 </p>
               </div>
             </div> {/* item end */}

             <div className="row item">
               <div className="twelve columns">
                 <h3>National Research Council Canada</h3>
                 <p className="info"> Application Developer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                 <p>
                 • Developed an online application using HTML, CSS, and JavaScript to display relevant information <br/>
                 • Wrote Java Classes for MySQL backend <br/>
                 • Created MySQL Queries to pull and save data to be used in the dashboard and other processes <br/>
                 • Conducted a Functionality Analysis of a Data Acquisition Server Device using TCP to command line
                 </p>
               </div>
             </div> {/* item end */}

           </div> {/* main-col end */}
         </div> {/* End Work */}
         {/* Skills
        ----------------------------------------------- */}

        <Skills />


      </section>
    );
  }
}

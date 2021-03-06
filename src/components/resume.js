import React, { Component } from 'react';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
         {/* Education ----------------------------------------------- */}
         <div className="row education">
           <div className="three columns header-col">
             <h1><span>Education</span></h1>
           </div>
           <div className="nine columns main-col">
             <div style={{textAlign:"left"}} className="row item">
               <div className="twelve columns">
                 <h3>University of Waterloo </h3>
                 <p className="info">Computer Engineering<span>•</span> <em className="date">Sept. 2019 - May 2022</em></p>
                 <p>
                    Relevent Courses: <br/>

                    Algorithms and Data Structures,
                    Compliers,
                    Computer Networks,
                    Database Systems,
                    Distributed Systems,
                    Embedded Microprocessor Systems,
                    Numerical Methods,
                    Probability theory and statistics,
                    Real time Operating Systems,
                    Reinforced Learning,
                    Programming for Performance, 
                    Autonomous vehicles,
                    and
                    System Programming and Concurrency

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
           <div style={{textAlign:"left"}} className="nine columns main-col">
            <div className="row item">
                <div className="twelve columns">
                  <h3>Canada Startup Company</h3>
                  <p className="info">Full-Stack Developer <span>•</span> <em className="date">Sept 2021 - Dec 2021</em></p>
                  <p  style={{textAlign:"left"}}>

                    Canada Startup Company develops MVPs for startups and aids in establishing ideas. 
                    While working here I developed 3 functioning MVPs with varying technology stacks and containerizing them with Docker.
                    The first was a moblie application for in-depth restaurant review which was built using React Native, Flask and MongoDB.
                    The second project was a blockchain project for storing medical records, so doctors and patients could access records quickly and have them stored securely.
                    This was developed using Hyperledger Fabric with ChainCode smart contacts and a Nodejs API along with Firebase Real-Time Database for offchain storage. 
                    The third project was a email plugin for generating automatic custom replies. This was developed using Pytorch to fine-tune the BERT pre-trained model to classify emails with NLP techniques and then respond using customer information which was stored in SQL.
  
                  {/*
                      • Created a React Native Mobile Application with MongoDB and Flask for an in-depth restaurant review application
                      • Built a private blockchain solution for storing and distributing records using Hyperledger Fabric with NodeJs and ChainCode
                      • Developed an email plugin to generate automatic responses using Pytorch to fine-tune BERT to categorize emails and SQL to store client information
                      • Communicated project functionality and market fit with executives from various departments

                  */}
                  </p>
                </div>
              </div> {/* item end */}
             <div className="row item">
               <div className="twelve columns">
                 <h3>Cognizantly inc.</h3>
                 <p className="info">Lead Software Developer <span>•</span> <em className="date">Sept 2020 - December 2020</em></p>
                 <p  style={{textAlign:"left"}}>

                 Cognizantly was new startup, the company's goal is to analyze behaviorial habits of traders to help them improve.
                 My main responsibility was to help develop the main application, which
                 I did using Reactjs and Flask with Firebase's Realtime Database. The application was then containerized
                 using Docker. Along with leading the application's development, I aided the data science portion by
                 isolating user patterns and also to calculating other components using Jupyter notebook.

                 {/*
                     • Developed a full-stack application to display behavior analytics of traders using the Plaid API, with Flask framework and JavaScript for the frontend <br/>
                     • Designed a NoSQL backend layout using Firebase to ensuring data flow was clear and scalable for the future <br/>
                     • Containerized development with Docker to ensure the development was standardized <br/>
                     • Correlated trading data to find patterns using Jupyter notebook, which will aid in optimizing user efforts <br/>
                 */}
                 </p>
               </div>
             </div> {/* item end */}
             <div className="row item">
               <div className="twelve columns">
                 <h3>Nuclear Promise X</h3>
                 <p className="info">Nuclear Software Developer <span>•</span> <em className="date">January 2020 - April 2020</em></p>
                 <p style={{textAlign:"left"}}>
                 Nuclear Promise X is a startup that is attempting to update practices in the nuclear industry.
                 Most of my tasks were related to full-stack web applications. Depending on the requirements of the client
                 (mainly Bruce Power) or Nuclear Promise X, I would either use Powerapps or Reactjs in combination with Nodejs or Flask connecting to a
                 MSSQL or Sharepoint backend. Along with these tasks, I designed a Java Rich Client Application using SWT libraries to generate and
                 log documentation files and worked on some NLP projects to improve the efficiency of tasks at the Nuclear Plant.
                 Furthermore, due to the company being a startup, I was able to explore possible development of a Dapp applicaiton using
                 truffle suite with Nodejs as potential project.

                 {/*
                     • Created Full Stack applications using Powerapps with Sharepoint/SQl and Reactjs with Nodejs/Flask <br/>
                     • Designed a Java Rich Client Application using SWT libraries to generate and log documentation files <br/>
                     • Created predictive scripts using Natural Language Processing (Lemmatization and Word-Encoding)<br/>
                     • Automated testing using RPA bot with UIPath to reduce testing time by 60 % <br/>
                     • Developed and presented an initial Etheruem supply chain Dapp using truffle suite with Nodejs <br/>
                     */}
                 </p>
               </div>
             </div> {/* item end */}
             <div className="row item">
               <div className="twelve columns">
                 <h3>National Bank Financial</h3>
                 <p className="info">Electronic Trading IT Analyst <span>•</span> <em className="date">May 2019 - August 2019</em></p>
                 <p style={{textAlign:"left"}}>

                 For this coop I worked on at the TMX location on the floor with the traders.
                 My main objective was to reduce time consuming tasks to make the process of information being transported more efficient and effortless.
                 To do this I created Python scriptsm using Webscraping with Seleniumm to grab data and organizing it to ensure efficiency,
                 along with updating the MySQL server and check the accuracy of record. Furthermorem I automated and expanded on past scripts in PowerShell and VBA for Excel Macros.
                 As well with this I expanded on several SQL queries to improve the database structures.

                 {/*
                     • Developed Python scripts to automate <br/>
                          ▪ Web scraping/ Automation with Selenium reducing time-consuming tasks <br/>
                          ▪ MySQL server data updates to ensure accurate data and manage records <br/>
                          ▪ Extraction and manipulation of various data for pattern matching <br/>
                     • Created multiple PowerShell scripts to automate tasks and expand past scripts <br/>
                     • Constructed several SQL queries and improved performance of existing SQL scripts <br/>
                     • Created Excel Macros in VBA to improve efficiencies in banking procedures and document processing <br/>
                  */}
                 </p>
               </div>
             </div> {/* item end */}

             <div className="row item">
                <div className="twelve columns">
                    <h3>Waterloop Design team</h3>
                    <p className="info">Electrical Team Member<span>•</span> <em className="date">January 2019 - April 2019</em></p>
                    <p style={{textAlign:"left"}}>
                    I was apart of the electrical team on Waterloo Hyperloop Design Team.
                    In this role I used Eagle to create schematics and board layout for an aruino shield that would be used in the pod.
                    Additionally I assisted in conducting battery testing to ensure device information and usage was correct
                    when creating the circuit.

                    {/*
                        • Used Eagle to create the schematic and board layout for an Arduino shield used in the pod <br/>
                        • Assisted in carrying out battery testing to ensure device information and usage was correct
                     */}
                    </p>
                </div>
             </div> {/* item end */}

             <div className="row item">
                <div className="twelve columns">
                    <h3>TD Bank</h3>
                    <p className="info">Automation Controller/Access Analyst <span>•</span> <em className="date">September 2018 - December 2018</em></p>
                    <p style={{textAlign:"left"}}>
                    During this work term I was on the automation team at TD bank. In this role I created a database in Microsoft Accesses using SQL and VBA to set up a system
                    to log process changes, improving communication for the team.
                    Along with this, I worked on automating banking tasks and scheduling using Python and BluePrism.
                    Along with testing the automations developed.

                    {/*
                        • Created a database in Microsoft Access using SQL queries and VBA to set up a system to log process changes improving communication <br/>
                        • Optimized scheduling of processes and created Python scripts increase overall efficiency <br/>
                        • Created functions using Blue Prism to automate various bank-related tasks <br/>
                        • Wrote test cases for processes along with testing additional processes
                     */}
                    </p>
                </div>
             </div> {/* item end */}

             <div className="row item">
               <div className="twelve columns">
                 <h3>National Research Council Canada</h3>
                 <p className="info"> Application Developer <span>•</span> <em className="date">January 2018 - April 2018</em></p>
                 <p style={{textAlign:"left"}}>
                 Developed an web application using HTML, CSS, and JavaScript(jQuery and Bootstrap), which displayed information to be monitored.
                 Additionally I used MySQL and Java to aid in backend developed by setting up queries and creating Java Classes to store information.
                 Along with these tasks I was given the opportunity to test a Data Acquisition Server Device
                 using TCP to command line, and analyze its usability for the organization.

                 {/*
                     • Developed an online application using HTML, CSS, and JavaScript to display relevant information <br/>
                     • Wrote Java Classes for MySQL backend <br/>
                     • Created MySQL Queries to pull and save data to be used in the dashboard and other processes <br/>
                     • Conducted a Functionality Analysis of a Data Acquisition Server Device using TCP to command line
                  */}
                 </p>
                 <br/>
               </div>
             </div> {/* item end */}

           </div> {/* main-col end */}
         </div> {/* End Work */}
         {/* Skills
        ----------------------------------------------- */}

        {
            //<Skills />
        }

      </section>
    );
  }
}

import React, { Component } from 'react';
import {Accordion,AccordionSummary,AccordionDetails,Typography} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default class Header extends Component {

  render() {

    const style = {
        Header: {
          fontSize: 20,
          marginTops: 10,
          marginBottom: 10,
          height: 500,
          textAlign: 'center'
        }
      }



    var Projects = [
    {title: "PDF Data Mining and Budgeting Analysis",
    Details:  `The goal of this project was to reduce the amount of time it takes me to check my monthly budget and organize my expenses based on category. I accomplished this
    initially by creating a python script that read banking pdfs and with regex to get a pandas data frame. I used this data to graph and used to sum the data.
    This was useful on the banking statements which came bimonthly to improve on this I used the current data to train a Random Forest Classification model with
    word vectorization, so I could predict the category of a expense. Through this I am able to apply my summations directly on banking csvs instead of waiting for then
    statements. I enjoyed this project since I was able to apply my knowledge without having a tutorial as a guideline and figure out gaps in my knowledge about machine learning.
    Along with this this was a project I could actually use which makes a project more interesting to work on. ` },
    {title: "LSTM Stock Predictor",
    Details: `Created a stock predictor using a LSTM model which was created and trained with Keras and Tensorflow in python, with data being pulled from a API.
    For this project I used various resources and it I took multiple breaks in it to make sure I was limiting the amount of blind copying needed. I rarely add
    projects I completed following a tutorial because it is hard to check if you actually learned the content or just copied it. But for this one by using different
    tutorals I was able to learn various method. Furthermore this project got me to look at stock analysis in more depth and learn more about it.` },
    {title: "Reddit and Weather Dashboard",
    Details: `The goal of this project was to make a webapp to limit the amount of time I spend on my phone. Along with improving my Reactjs and Flask skills.
    So using the reddit and open weather API I fetched the information from the frontend to display and have open in the background.
    To limit looking at my phone for reddit and the weather I made a webapp with Reactjs and Flask.`},
    {title: "Internet Analysis",
    Details:  `This was a group project in my database systems course . I was responsible for the data science component since it was group based.
    In this I aided in designing and implementing an Entity-Relationship  model in 3nf normalization for internet traffic datasets from Kaggle in MySQL.
    Analyzed data in Jupyter notebook looking at the correlation and generating questions of what to ask the data. Using the data given I setup a classification for detecting
    the type of actack occuring in the connection using a DecisionTreeClassifier model.`},
    {title: "X and Y Plotter",
    Details:  ` Project created for a project course that taught hardware design skills using a TI MSP430 Launchpad board. Using diptrace created a schematic and PCB design for custom IO.
     Then solidered parts on to it and wrote the code for the project in C. Project taught me how to solider, debug hardware issues and how to design a piece of hardward.`},
    
    {title: "Deep Reinforced Learning For Pong and a Maze (ECE493 Assignment)",
    Details:
     `Implemented and tested with the following models Actor-Critic, DQN, Q-Learning and Sarsa on the game 
     Pong volley game (Environment created with starter code) and a custom maze environment, which was done 
     using the OpenAI Baseline Library.` 

    },
    {title: "Django Todo app",
    Details:
     "Django + ReactJS todo app expanded on tutorial and code up on github"
    },
     {title: "Personal Gaming Computer",
    Details:
     `My first project and the one that led me to be interested in technology.
    Specs: CPU: intel 4790 i7 GPU: 780 6GBRAM: 16 GB DDR3 Storage: 500 GB ssd + 250 GB ssd`,
    Extra: "Favorite PC games: Asseto coursa, Total War Shogun 2, Witcher 3"

    },
    {title: "Logisitics Mobile Applicaiton ",
    Details:  `This project is still in progress, but its a moblie application I am writing in Kotlin in android studio with my brother
    for tracking driver loads and truck metrics, we are still working on the features and are planning on using Google Firebase for the backend.`},
    ]

    /*
    
    {title: "ECE454: Distributed Computing Projects",
    Details:
     "ECE 454 Assignments: \r\n" + " A1 Thrift RPC, setup frontend and backend layers for load balancing Bcrypt key derivation function A2 Spark and Hadoop to organize movie data A3 Apache ZooKeeper, determine replicas and detecting crashes, for key-value service A4 Kafka Streams process messages and output, pub sub model"

    },
    
    */
    return (
      <section id="portfolio">

      <div className="row">

          {/* Projects-wrapper
              <h1>Check Out Some of My Works.</h1>
              <h1>My Favorite Projects</h1>

            */}

            <div className="three columns header-col">
              <h1><span>Projects</span></h1>
            </div>

        {
            /*
            <div class="col-md-12">
                <div class="section-header wow fadeInDown" data-wow-delay="0.2s">
                    <h2>My Favorite Projects</h2>
                </div>

            </div>
            */
        }

        <br/>
        <br/>
           <p>
            These are my favorite projects, some of them have been uploaded to github others I felt didn't add enough value, but I still found them useful
           </p>

           {/*
               - budget > 2 sub projects
               Mined relevant data found in personal banking PDF using Regex and then organized it into a Pandas data frame and csv
               • Data cleaned and processed using TFIDF and Vectorization on names to be able to predict expenditures category
               • predicted expenditures category with Random Forest Classi

               - tensor flow -> other stock interewst
               Created a deep learning model with LSTM to predict stock values using its time-series data from the alpha vantage API, in Python with Keras and Tensor
                - learned more about macd, rsi and other technical

               - info dash
               Full-stack using Reactjs for the front end and Flask for the backend
               • Used Reddit API and open weather API to fetch relevant information about the current weather and popular subreddit trends

               -  interet analysis
               - x and y plot

               ----
               currnet working on transpo app

            */}



        <div className="row item">
            {Projects.map(project => (

                  <Accordion>
                      <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      >
                          <h4>{project.title}</h4>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p style={{textAlign:"left"}}>
                       {project.Details}
                       <br/>
                       {project.Extra}
                       </p>

                      </AccordionDetails>
                  </Accordion>


            ))}

        </div>
      </div> {/* row End */}

      </section>
    );
  }
}


/*
<Accordion>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
    >
        <h3>PDF Data Mining and Budgeting Analysis 2</h3>
    </AccordionSummary>
        <AccordionDetails>
        <p style={{textAlign:"left"}}>
        The goal of this project was to reduce the amount of time it takes me to check my monthly budget and organize my expenses based on category. I accomplished this
        initially by creating a python script that read banking pdfs and with regex to get a pandas data frame. I used this data to graph and used to sum the data.
        This was useful on the banking statements which came bimonthly to improve on this I used the current data to train a Random Forest Classification model with
        word vectorization, so I could predict the category of a expense. Through this I am able to apply my summations directly on banking csvs instead of waiting for then
        statements. I enjoyed this project since I was able to apply my knowledge without having a tutorial as a guideline and figure out gaps in my knowledge about machine learning.
        Along with this this was a project I could actually use which makes a project more interesting to work on.
        </p>
    </AccordionDetails>
</Accordion>
*/

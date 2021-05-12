import React, { Component } from 'react';



export default class Header extends Component {
  render() {
    return (
      <section id="portfolio">

      <div className="row">
          <h1>Check Out Some of My Works.</h1>
          {/* Projects-wrapper */}
          <h1>My Favorite Projects</h1>

          <div class="col-md-12">
              <div class="section-header wow fadeInDown" data-wow-delay="0.2s">
                  <h2>My Favorite Projects</h2>
              </div>
          </div>

           <p>
            These are the projects I have worked or am working on that I felt either taught me the most or have the most use
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
            <div className="twelve columns">
              <h3>PDF Data Mining and Budgeting Analysis</h3>
              <p style={{textAlign:"left"}}>
              The goal of this project was to reduce the amount of time it takes me to check my monthly budget and organize my expenses based on category. I accomplished this
              initially by creating a python script that read banking pdfs and with regex to get a pandas data frame. I used this data to graph and used to sum the data.
              This was useful on the banking statements which came bimonthly to improve on this I used the current data to train a Random Forest Classification model with
              word vectorization, so I could predict the category of a expense. Through this I am able to apply my summations directly on banking csvs instead of waiting for then
              statements. I enjoyed this project since I was able to apply my knowledge without having a tutorial as a guideline and figure out gaps in my knowledge about machine learning.
              Along with this this was a project I could actually use which makes a project more interesting to work on.
              </p>
            </div>
            <div className="twelve columns">
              <h3>LSTM Stock Predictor </h3>
              <p style={{textAlign:"left"}}>
              --- re word
              Created a stock predictor using a LSTM model which was created and trained with Keras and Tensorflow in python, with data being pulled from a API.
              For this project I used various resources and it I took multiple breaks in it to make sure I was limiting the amount of blind copying needed. I rarely add
              projects I completed following a tutorial because it is hard to check if you actually learned the content or just copied it. But for this one by using different
              tutorals I was able to learn various method. Furthermore this project got me to look at stock analysis in more depth and learn more about it.
              </p>
            </div>
            <div className="twelve columns">
              <h3> Reddit and Weather Dashboard </h3>
              <p style={{textAlign:"left"}}>
              The goal of this project was to make a webapp to limit the amount of time I spend on my phone. Along with improving my Reactjs and Flask skills.
              So using the reddit and open weather API I fetched the information from the frontend to display and have open in the background.
              To limit looking at my phone for reddit and the weather I made a webapp with Reactjs and Flask.
              </p>
            </div>

            <div className="twelve columns">
              <h3>Internet analysis</h3>
              <p style={{textAlign:"left"}}>
              This was a group project for database systems. I was responsible for the data science component since it was group based.
              In this I aided in designing and implementing an Entity-Relationship  model in 3nf normalization for internet traffic datasets from Kaggle in MySQL.
              Analyzed data in Jupyter notebook looking at the correlation and generating questions of what to ask the data. Using the data given I setup a classification for detecting
              the type of actack occuring in the connection using a DecisionTreeClassifier model.
              </p>
            </div>

            <div className="twelve columns">
              <h3>X and Y Plotter</h3>
              <p style={{textAlign:"left"}}>
              Project created for a project course that taught hardware design skills using a TI MSP430 Launchpad board. Using diptrace created a schematic and PCB design for custom IO.
              Then solidered parts on to it and wrote the code for the project in C. Project taught me how to solider, debug hardware issues and how to design a piece of hardward.
              </p>
            </div>

            <div className="twelve columns">
              <h3> Personal Gaming Computer  </h3>
              <p style={{textAlign:"left"}}>
              My first project and the one that led me to be interested in technology.

              Specs:
              CPU: intel 4790 i7
              GPU: 780 6GB
              RAM: 16 GB DDR3
              Storage: 500 GB ssd + 250 GB ssd
              </p>
              <p>
              Favorite PC games: Asseto coursa, Total War Shogun 2, Witcher 3
              </p>
            </div>

            <div className="twelve columns">
              <h3> Logisitics Mobile Applicaiton </h3>
              <p style={{textAlign:"left"}}>
              This project is still in progress, but its a moblie application I am writing in Kotlin in android studio with my brother
              for tracking driver loads and truck metrics, we are still working on the features and are planning on using Google Firebase for the backend.
              </p>
            </div>

          </div> {/* item end */}


      </div> {/* row End */}



      </section>
    );
  }
}

import React, { Component,Fragment } from 'react';
import './Skills.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const style = {
  Paper: {
    padding: 20,
    marginTops: 10,
    marginBottom: 10,
    height: 500,
    textAlign: 'center'
  }
}



export default function skills () {

        var Language = ["C/C++","Python","Java","JavaScript","Lua","SQL/MySQL/SQLite","NoSql"];
        var Technologies = ["Eclipse","Nodejs","Reactjs","Flask","Firebase","Mangodb","Docker","MatLab","Git","PowerBI","BluePrism","Access/Excel Macros"];

        return (
          <section id="skills">


          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>
                Through projects, coops and courses I have aquired experience with various technologoies and language

                </p>
            </div> {/* main-col end */}
            <h3>Languages</h3>
            <Grid container spacing={3}>

            {Language.map(name => (
                <Grid item xs={4}>
                  <Paper className={style.paper} elevation={5}>{name}</Paper>
                </Grid>
            ))}

            </Grid>
            <br/>

            <h4>Technologies</h4>

            <Grid container spacing={3}>

            {Technologies.map(name => (

                <Grid item xs={4}>
                  <Paper className={style.paper} elevation={5}>{name}</Paper>
                </Grid>
            ))}


           </Grid>


          </div> {/* End skills */}


          </section>
        );

}

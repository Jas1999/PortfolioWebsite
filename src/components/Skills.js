import React, { Component } from 'react';

export default class Skills extends Component {


    render() {
        var Language = ["C/C++","Python","Java","JavaScript","Kotlin","Lua","SQL/MySQL/SQLite","NoSql","Assembly","VHDL","Verilog","VBA"];
        var Hardware = ["C/C++","Python","Java","Diptrace","Ardunio","Assembly","VHDL","Verilog"];
        var Technologies = ["Eclipse","Nodejs","Reactjs","Flask","Firebase","Mangodb","Docker","MatLab","Git","PowerBI","Jupyter Notebook","BluePrism","Access/Excel Macros"];

        return (
        <section id="skills">

        <div id="skillssection" class="skills-area section-padding">
    		<div class="container">
    			<div class="row">
    				<div class="col-md-12">
    					<div class="section-header wow fadeInDown" data-wow-delay="0.2s">
    						<h2>Skills</h2>
    					</div>
    				</div>
    			</div>
    			<div class="row wow fadeInDown">
    				<div class="col-md-6 col-xs-12 col-sm-12 col-lg-3">
    					<div class="skills">
    						<h3>Development</h3>
    						<h4>HTML/CSS</h4>
    						<h4>Java</h4>
    						<h4>C++/C#</h4>
    						<h4>Python</h4>
    						<h4>Javascript</h4>

                            {Language.map(name => (
                                <h4>
                                  {name}
                                </h4>
                            ))}
    					</div>
    				</div>
                </div>
            </div>
        </div>


          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.

                The Skills I have listed are the ones have learned by

                </p>

              <h3>Development Skills:</h3>

              <h3>Hardware Tools:</h3>

              <h3>Software Tools:</h3>



              <div className="bars">
                <ul className="skills">


                  <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                  <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}

          </section>
        );
    }
}

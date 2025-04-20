import React from "react";


const Portfolio = () => {

 

  return (
    <>
      <nav
        className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
        id="pb-navbar"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample09"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#section-home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-resume">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-services">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="site-hero"
        style={{ backgroundImage: 'url("/images/dp2.png")' }}
        id="section-home"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-10 text-center pt-5">
              <h1 className="site-heading site-animate">
                Hello, I'm <strong className="d-block">Shubham Sen,</strong>
                <p style={{ fontFamily: "monospace", fontSize: "40px" }}>
                  crafting sleek, interactive frontends from Somewhere!
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- section --> */}

      <section className="site-section" id="section-about">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
              <img
                src="/images/about.jpeg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 pl-lg-5">
              <div className="section-heading">
                <h2>
                  About <strong>Me</strong>
                </h2>
              </div>
              <p className="lead">
                Skilled in design and integration with a keen eye for
                problem-solving. Proficient in HTML, CSS, JS and ReactJS.
                Passionate about developing and launching new projects. Capable
                of converting business needs into technical solutions. Able to
                work independently with strong self-management skills while also
                thriving in a collaborative team environment.
              </p>

              <p>
                {/* <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a> */}
                <a
                  href="https://drive.google.com/file/d/1ynUNkVPItnRdAP0BGopW3LeK-OC7Mq_7/view?usp=drive_link"
                  className="btn btn-secondary px-4 py-2 btn-sm"
                >
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="site-section" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>Featured <strong>Portfolio</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Packaging</li>
					<li data-filter=".mockup">Mockup</li>
					<li data-filter=".typography">Typography</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
				<div className="row grid">
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p1.jpg" alt=""/>
							</div>
							<a href="images/p1.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Square Box Mockup</h4>
							<div className="cat">Mockup</div>
						</div>                                         
					</div>
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p2.jpg" alt=""/>
							</div>
							<a href="images/p2.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                  
						</div>
						<div className="p-inner">
							<h4>Product Box Package Mockup</h4>
							<div className="cat">Mockup</div>
						</div>                                         
					</div>                            
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p3.jpg" alt=""/>
							</div>
							<a href="images/p3.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a> 

						</div>
						<div className="p-inner">
							<h4>Creative Package Design</h4>
							<div className="cat">Packaging</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p4.jpg" alt=""/>
							</div>
							<a href="images/p4.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div> 
						<div className="p-inner">
							<h4>Packaging Brand</h4>
							<div className="cat">Packaging</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p5.jpg" alt=""/>
							</div>
							<a href="images/p5.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>Isometric 3D Extrusion</h4>
							<div className="cat">Typography</div>
						</div>
					</div>
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src="images/p6.jpg" alt=""/>
							</div>
							<a href="images/p6.jpg" className="img-pop-up">  
								<div className="middle">
									<div className="text align-self-center d-flex"><img src="images/preview.png" alt=""/></div>
								</div>
							</a>                                
						</div>
						<div className="p-inner">
							<h4>White Space Photography</h4>
							<div className="cat">photography</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> */}
      {/* <!-- .section --> */}

      <section className="site-section " id="section-resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Education</strong>
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              {/* <h2 className="mb-5">Education</h2> */}
              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span>March 2018
                </span>
                <h3>D.A.V. Model School, Durgapur</h3>
                <p>
                  CBSE board <br />   Marks obtained(in %): 91
                </p>
                {/* <span className="school">New York University</span> */}
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> July 2019 - May 2023
                </span>
                <h3>B.Tech. in Electronics and Communication(ECE) from KIIT Bhubaneswar</h3>
                <p>
                  C.G.P.A. 8.19
                </p>
                {/* <span className="school">New York University</span> */}
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> February 2024 - Present
                </span>
                <h3>Job oriented training from Webskitters Academy on React JS course</h3>
                <p>
                  Learnt about HTML,CSS,Javascript,React JS, NextJS
                </p>
                {/* <span className="school">New York University</span> */}
              </div>

              {/* <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> March 2013 - Present
                  Deacember.
                </span>
                <h3>Masteral in Information Technology</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
                <span className="school">New York University</span>
              </div> */}
            </div>
            {/* <div className="col-md-6">
              <h2 className="mb-5">Experience</h2>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> March 2013 - Present
                </span>
                <h3>Lead Product Designer</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
                <span className="school">Github</span>
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> March 2013 - Present
                </span>
                <h3>Lead Product Designer</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
                <span className="school">Facebook</span>
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> March 2013 - Present
                </span>
                <h3>Lead Product Designer</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
                <span className="school">Twitter</span>
              </div>

              <div className="resume-item mb-4">
                <span className="date">
                  <span className="icon-calendar"></span> March 2013 - Present
                </span>
                <h3>Lead Product Designer</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic.
                </p>
                <span className="school">Shopify</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* // <!-- .section --> */}

      <section className="site-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  Expertise in <strong>Frontend Web development using HTML, CSS, Tailwind, Javascript, Typescript,  ReactJS and NextJS</strong>
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-6">
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img
                    src="images/person_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
                <blockquote className="block-47-quote">
                  <p>
                    &ldquo;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.&rdquo;
                  </p>
                  <cite className="block-47-quote-author">
                    &mdash; Ethan McCown, CEO <a href="#">XYZ Inc.</a>
                  </cite>
                </blockquote>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img
                    src="images/person_2.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
                <blockquote className="block-47-quote">
                  <p>
                    &ldquo;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.&rdquo;
                  </p>
                  <cite className="block-47-quote-author">
                    &mdash; Craig Gowen, CEO <a href="#">XYZ Inc.</a>
                  </cite>
                </blockquote>
              </div>
            </div>

            <div className="col-md-6">
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img
                    src="images/person_3.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
                <blockquote className="block-47-quote">
                  <p>
                    &ldquo;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.&rdquo;
                  </p>
                  <cite className="block-47-quote-author">
                    &mdash; Ethan McCown, CEO <a href="#">XYZ Inc.</a>
                  </cite>
                </blockquote>
              </div>
            </div>
            <div className="col-md-6">
              <div className="block-47 d-flex mb-5">
                <div className="block-47-image">
                  <img
                    src="images/person_4.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                  />
                </div>
                <blockquote className="block-47-quote">
                  <p>
                    &ldquo;Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.&rdquo;
                  </p>
                  <cite className="block-47-quote-author">
                    &mdash; Craig Gowen, CEO <a href="#">XYZ Inc.</a>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section className="site-section pb-0" id="section-services">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Projects</strong>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 text-center mb-5">
              <div
                className="site-service-item site-animate"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <span className="icon-browser2"></span>
                </span>
                <h3 className="mb-4">Web Design</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center mb-5">
              <div
                className="site-service-item site-animate"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <span className="icon-presentation"></span>
                </span>
                <h3 className="mb-4">Search Engine Optimization</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  <a href="#" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 text-center mb-5">
              <div
                className="site-service-item site-animate"
                data-animate-effect="fadeIn"
              >
                <span className="icon">
                  <span className="icon-video2"></span>
                </span>
                <h3 className="mb-4">Video Editing</h3>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar.
                </p>
                <p>
                  <a href="#" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="site-section" id="section-services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  My <strong>Projects</strong>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/e-commerce.webp"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">e-Commerce Website with Authentication</a>
                  </h3>
                  <p className="mb-4">
                   React based e-commerce website with login page using Clerk. It includes add to cart functionality and the total price is visible too. The user can also sort products based on price, search by category and title. <br />
                   <a href="https://clerkpr.netlify.app/" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                   
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/wts-image.png"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">WTS Project</a>
                  </h3>
                  <p className="mb-4">
                    A React based seller website in which the user can view their items which are to be sold. The user can also create, delete or edit the products as per their need. <br />
                    <a href="https://wtspro.netlify.app" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/todo-image.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px",width:"500px",objectFit:"contain"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">ToDo App</a>
                  </h3>
                  <p className="mb-4">
                   A React based ToDo application built with material UI in whic the user can create,edit or delete todos. The todos include details like name of the todo,enddate,images,description and a checkbox to mark the completed tasks. <br />
                   <a href="https://todoprac.netlify.app/" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/musicplayer.png"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px",width:"500px",objectFit:"contain"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">Music Player</a>
                  </h3>
                  <p className="mb-4">
                    A React based music player designed with tailwind CSS and material UI. The user can upload only music files,can edit the names and can view the available songs in grid view or list view. On clicking a particular song, it views the song details and the controls for playing the song.
                   <br />
                   <a href="https://musicplayerp.netlify.app/" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/crypto.png"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">Crypto App</a>
                  </h3>
                  <p className="mb-4">
                   A React based crypto currency website which lists the coins and their details in tabular form. The user can search the coins based on title or sort them based on their rank. On clicking a particular coin, it shows the coin details in a modal. The user can refetch the coin data on clicking the refetch button.
                   <br />
                   <a href="https://cryptpro.netlify.app/" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

		  <div className="col-sm-6 col-lg-4 mb-4">
              <div className="blog-entry">
                <a href="#">
                  <img
                    src="images/task_management.jpg"
                    alt="Image placeholder"
                    className="img-fluid"
                    style={{height:"300px"}}
                  />
                </a>
                <div className="blog-entry-text">
                  <h3>
                    <a href="#">Task Management System</a>
                  </h3>
                  <p className="mb-4">
                   A task management system built with NextJS, Material UI and supabase(for authentication), where users can signup and on login as user can view, edit or create or delete the tasks and on login as admin, they can view the tasks of all the users. This also includes list or kanban view and can drag and drop the tasks. <br />
                    <a href="https://taskmanager-gold-nine.vercel.app/" className="site-link">
                    Learn More <i className="icon-chevron-right"></i>
                  </a>
                  </p>

                  {/* <div className="meta">
                    <a href="#">
                      <span className="icon-calendar"></span> Aug 7, 2018
                    </a>
                    <a href="#">
                      <span className="icon-bubble"></span> 5 Comments
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="section-contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="section-heading text-center">
                <h2>
                  Get <strong>In Touch</strong>
                </h2>
              </div>
            </div>

            {/* <div className="col-md-7 mb-5 mb-md-0">
              <form action="" className="site-form">
                <h3 className="mb-5">Get In Touch</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control px-3 py-4"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control px-3 py-4"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control px-3 py-4"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group mb-5">
                  <textarea
                    className="form-control px-3 py-4"
                    cols="30"
                    rows="10"
                    placeholder="Write a Message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary  px-4 py-3"
                    value="Send Message"
                  />
                </div>
              </form>
            </div> */}
            <div className="col-md-5 pl-md-5">
              <h3 className="mb-5">My Contact Details</h3>
              <ul className="site-contact-details">
                <li>
                  <span className="text-uppercase">Email</span>
                  senshubham1095@gmail.com
                </li>
                <li>
                  <span className="text-uppercase">Phone</span>
                  +91 7063810590
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shubham-sen-3901421b1/">
                  <span className="text-uppercase">LinkedIN</span>
                  </a>
                  
                </li>
                <li>
                  <a href="https://github.com/travelfreakcoder">
                  <span className="text-uppercase">GitHub</span>
                  </a>
                  
                </li>
                <li>
                  <span className="text-uppercase">Address</span>
                  12/6, Anandapuri Co-Op <br />
                  54 Feet Road, Durgapur-713213 <br />
                  Dist. Paschim Bardhaman, W.B., India
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <p className="col-12 text-center">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;{" "}
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This is made  by Shubham Sen
              
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <p>
                {/* <a href="#" className="social-item">
                  <span className="icon-facebook2"></span>
                </a> */}
                <a href="https://x.com/shubhamsen30?t=g9F3Tfjx_80dYUaHX1i5qQ&s=08 " className="social-item">
                  <span className="icon-twitter"></span>
                </a>
                {/* <a href="#" className="social-item">
                  <span className="icon-instagram2"></span>
                </a> */}
                <a href="https://www.linkedin.com/in/shubham-sen-3901421b1/" className="social-item">
                  <span className="icon-linkedin2"></span>
                </a>
                {/* <a href="#" className="social-item">
                  <span className="icon-vimeo"></span>
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;

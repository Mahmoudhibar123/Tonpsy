import React from "react";
import "./Afterlogin.css";


function Afterlogin() {
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="theme.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      <div className="row" style={{transform: 'none'}}>
        <div className="col-lg-7">
          <div className="strip_list wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <figure>
              <a href="detail-page.html"><img src="http://www.ansonika.com/findoctor/img/doctor_listing_1.jpg" alt="" /></a>
            </figure>
            <small>Pediatrician</small>
            <h3>Dr. Cornfield</h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
            <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></span>
            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="http://www.ansonika.com/findoctor/img/badges/badge_1.svg" width={15} height={15} alt="" /></a>
            <ul>
              <li><a href="#0" onclick="onHtmlClick('Doctors', 0)" className="btn_listing">View on Map</a></li>
              <li><a href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank" rel="noopener noreferrer">Directions</a></li>
              <li><a href="detail-page.html">Book now</a></li>
            </ul>
          </div>
          {/* /strip_list */}
          <div className="strip_list wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <figure>
              <a href="detail-page.html"><img src="http://www.ansonika.com/findoctor/img/doctor_listing_2.jpg" alt="" /></a>
            </figure>
            <small>Psicologist</small>
            <h3>Dr. Shoemaker</h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
            <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></span>
            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="http://www.ansonika.com/findoctor/img/badges/badge_2.svg" width={15} height={15} alt="" /></a>
            <ul>
              <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
              <li><a rel="noopener noreferrer" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
              <li><a href="detail-page.html">Book now</a></li>
            </ul>
          </div>
          {/* /strip_list */}
          <div className="strip_list wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <figure>
              <a href="detail-page.html"><img src="http://www.ansonika.com/findoctor/img/doctor_listing_3.jpg" alt="" /></a>
            </figure>
            <small>Pediatrician</small>
            <h3>Dr. Lachinet</h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
            <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></span>
            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="http://www.ansonika.com/findoctor/img/badges/badge_3.svg" width={15} height={15} alt="" /></a>
            <ul>
              <li><a href="#0" onclick="onHtmlClick('Doctors', 2)" className="btn_listing">View on Map</a></li>
              <li><a rel="noopener noreferrer" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
              <li><a href="detail-page.html">Book now</a></li>
            </ul>
          </div>
          {/* /strip_list */}
          <div className="strip_list wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <figure>
              <a href="detail-page.html"><img src="http://www.ansonika.com/findoctor/img/doctor_listing_4.jpg" alt="" /></a>
            </figure>
            <small>Pediatrician</small>
            <h3>Dr. Rainwater</h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
            <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></span>
            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="http://www.ansonika.com/findoctor/img/badges/badge_4.svg" width={15} height={15} alt="" /></a>
            <ul>
              <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
              <li><a rel="noopener noreferrer" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
              <li><a href="detail-page.html">Book now</a></li>
            </ul>
          </div>
          {/* /strip_list */}
          <div className="strip_list wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <figure>
              <a href="detail-page.html"><img src="http://www.ansonika.com/findoctor/img/doctor_listing_5.jpg" alt="" /></a>
            </figure>
            <small>Psicologist</small>
            <h3>Dr. Manzone</h3>
            <p>Id placerat tacimates definitionem sea, prima quidam vim no. Duo nobis persecuti cuodo....</p>
            <span className="rating"><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star voted" /><i className="icon_star" /><i className="icon_star" /> <small>(145)</small></span>
            <a href="badges.html" data-toggle="tooltip" data-placement="top" data-original-title="Badge Level" className="badge_list_1"><img src="http://www.ansonika.com/findoctor/img/badges/badge_4.svg" width={15} height={15} alt="" /></a>
            <ul>
              <li><a href="#0" onclick="onHtmlClick('Doctors', 1)" className="btn_listing">View on Map</a></li>
              <li><a rel="noopener noreferrer" href="https://www.google.com/maps/dir//Assistance+%E2%80%93+H%C3%B4pitaux+De+Paris,+3+Avenue+Victoria,+75004+Paris,+Francia/@48.8606548,2.3348734,14z/data=!4m15!1m6!3m5!1s0x0:0xa6a9af76b1e2d899!2sAssistance+%E2%80%93+H%C3%B4pitaux+De+Paris!8m2!3d48.8568376!4d2.3504305!4m7!1m0!1m5!1m1!1s0x47e67031f8c20147:0xa6a9af76b1e2d899!2m2!1d2.3504327!2d48.8568361" target="_blank">Directions</a></li>
              <li><a href="detail-page.html">Book now</a></li>
            </ul>
          </div>
          {/* /strip_list */}
          <nav className="add_top_20">
            <ul className="pagination pagination-sm">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          {/* /pagination */}
        </div>
        {/* /col */}
        <aside className="col-lg-5" id="sidebar" style={{position: 'relative', overflow: 'visible', boxSizing: 'border-box', minHeight: '1px'}}>
          <div className="theiaStickySidebar" style={{paddingTop: '0px', paddingBottom: '1px', position: 'static', transform: 'none', top: '0px', left: '616px'}}>
            <div id="map_listing" className="normal_list" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)'}}>
                <div className="gm-style" style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px'}}>
                  <div tabIndex={0} style={{position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', cursor: 'url("http://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y'}}>
                    <div style={{zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}>
                      <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 100, width: '100%'}}>
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}>
                          <div style={{position: 'absolute', zIndex: 990, transform: 'matrix(1, 0, 0, 1, -154, -63)'}}>
                            <div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                            <div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px'}}>
                              <div style={{width: '256px', height: '256px'}} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 101, width: '100%'}} />
                      <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 102, width: '100%'}} />
                      <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 103, width: '100%'}}>
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: -1}}>
                          <div style={{position: 'absolute', zIndex: 990, transform: 'matrix(1, 0, 0, 1, -154, -63)'}}>
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '0px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '0px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '-256px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '-256px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '-256px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '0px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '256px', top: '256px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '256px'}} />
                            <div style={{width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '-256px', top: '256px'}} />
                          </div>
                        </div>
                        <div style={{width: '25px', height: '35px', overflow: 'hidden', position: 'absolute', left: '-145px', top: '38px', zIndex: 73}}><img alt="" src="http://www.ansonika.com/findoctor/img/pins/Doctors.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', userSelect: 'none', width: '25px', height: '35px', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                      </div>
                      <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 0}}>
                        <div style={{position: 'absolute', zIndex: 990, transform: 'matrix(1, 0, 0, 1, -154, -63)'}}>
                          <div style={{position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i518!3i352!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=21008" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '-256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i517!3i352!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=87466" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '-256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i517!3i351!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=28632" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '0px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i518!3i351!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=93245" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '256px', top: '0px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i519!3i352!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=85621" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i519!3i353!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=13384" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '-256px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i517!3i353!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=15229" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '256px', top: '-256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i519!3i351!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=26787" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                          <div style={{position: 'absolute', left: '0px', top: '256px', width: '256px', height: '256px', transition: 'opacity 200ms linear 0s'}}><img draggable="false" alt="" role="presentation" src="http://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i10!2i518!3i353!4i256!2m3!1e0!2sm!3i501218672!3m17!2sfr-FR!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5oOiNGRkJCMDB8cC5zOjQzLjQwMDAwMDAwMDAwMDAwNnxwLmw6MzcuNTk5OTk5OTk5OTk5OTk0fHAuZzoxLHMudDo0OXxwLmg6I0ZGQzIwMHxwLnM6LTYxLjh8cC5sOjQ1LjU5OTk5OTk5OTk5OTk5NHxwLmc6MSxzLnQ6NTB8cC5oOiNGRjAzMDB8cC5zOi0xMDB8cC5sOjUxLjE5OTk5OTk5OTk5OTk5fHAuZzoxLHMudDo1MXxwLmg6I0ZGMDMwMHxwLnM6LTEwMHxwLmw6NTJ8cC5nOjEscy50OjZ8cC5oOiMwMDc4RkZ8cC5zOi0xMy4yMDAwMDAwMDAwMDAwMDN8cC5sOjIuNDAwMDAwMDAwMDAwMDA1N3xwLmc6MSxzLnQ6MnxwLmg6IzAwRkY2QXxwLnM6LTEuMDk4OTAxMDk4OTAxMTIzNHxwLmw6MTEuMjAwMDAwMDAwMDAwMDE3fHAuZzox!4e0&key=AIzaSyCoz993id_Qq7AcfaoVzviC6swgvQRixuQ&token=79842" style={{width: '256px', height: '256px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                        </div>
                      </div>
                    </div>
                    <div className="gm-style-pbc" style={{zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', opacity: 0}}>
                      <p className="gm-style-pbt" />
                    </div>
                    <div style={{zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y'}}>
                      <div style={{zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}>
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 104, width: '100%'}} />
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 105, width: '100%'}} />
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 106, width: '100%'}}>
                          <div className="cluster-visible" style={{backgroundImage: 'url("https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m1.png")', backgroundPosition: '0px 0px', height: '53px', lineHeight: '53px', width: '53px', textAlign: 'center', cursor: 'pointer', top: '-35.0487px', left: '-44.8116px', color: 'black', position: 'absolute', fontSize: '11px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold'}}>2</div>
                          <div className="cluster" />
                          <div title style={{width: '25px', height: '35px', overflow: 'hidden', position: 'absolute', opacity: 0, cursor: 'pointer', touchAction: 'none', left: '-145px', top: '38px', zIndex: 73}}><img alt="" src="http://www.ansonika.com/findoctor/img/pins/Doctors.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', userSelect: 'none', width: '25px', height: '35px', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none'}} /></div>
                        </div>
                        <div style={{position: 'absolute', left: '0px', top: '0px', zIndex: 107, width: '100%'}} />
                      </div>
                    </div>
                  </div>
                  <iframe aria-hidden="true" title="testIframe" frameBorder={0} tabIndex={-1} style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none'}} />
                  <div style={{marginLeft: '5px', marginRight: '5px', zIndex: 1000000, position: 'absolute', left: '0px', bottom: '0px'}}>
                    <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps?ll=48.865633,2.321236&z=10&t=m&hl=fr-FR&gl=US&mapclient=apiv3" title="Ouvrir cette zone dans Google Maps (dans une nouvelle fenêtre)" style={{position: 'static', overflow: 'visible', float: 'none', display: 'inline'}}>
                      <div style={{width: '66px', height: '26px', cursor: 'pointer'}}><img alt="" src="http://maps.gstatic.com/mapfiles/api-3/images/google_white5.png" draggable="false" style={{position: 'absolute', left: '0px', top: '0px', width: '66px', height: '26px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px'}} /></div>
                    </a>
                  </div>
                  <div style={{backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: '300px', height: '180px', position: 'absolute', left: '32px', top: '155px'}}>
                    <div style={{padding: '0px 0px 10px', fontSize: '16px', boxSizing: 'border-box'}}>Données cartographiques</div>
                    <div style={{fontSize: '13px'}}>Données cartographiques ©2020 Google</div>
                    <button draggable="false" title="Fermer" aria-label="Fermer" type="button" className="gm-ui-hover-effect" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', top: '0px', right: '0px', width: '37px', height: '37px'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{pointerEvents: 'none', display: 'block', width: '13px', height: '13px', margin: '12px'}} /></button>
                  </div>
                  <div className="gmnoprint" style={{zIndex: 1000001, position: 'absolute', right: '279px', bottom: '0px', width: '126px'}}>
                    <div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px'}}>
                      <div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}>
                        <div style={{width: '1px'}} />
                        <div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} />
                      </div>
                      <div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a style={{textDecoration: 'none', cursor: 'pointer'}}>Données cartographiques</a><span style={{display: 'none'}}>Données cartographiques ©2020 Google</span></div>
                    </div>
                  </div>
                  <div className="gmnoscreen" style={{position: 'absolute', right: '0px', bottom: '0px'}}>
                    <div style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '11px', color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)'}}>Données cartographiques ©2020 Google</div>
                  </div>
                  <div className="gmnoprint gm-style-cc" draggable="false" style={{zIndex: 1000001, userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '166px', bottom: '0px'}}>
                    <div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}>
                      <div style={{width: '1px'}} />
                      <div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} />
                    </div>
                    <div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a href="https://www.google.com/intl/fr-FR_US/help/terms_maps.html" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)'}}>Conditions d'utilisation</a></div>
                  </div>
                  <button draggable="false" title="Passer en plein écran" aria-label="Passer en plein écran" type="button" style={{background: 'none rgb(255, 255, 255)', display: 'none', border: '0px', margin: '10px', padding: '0px', position: 'absolute', cursor: 'pointer', userSelect: 'none', top: '0px', right: '0px'}} />
                  <div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: '14px', lineHeight: '14px', position: 'absolute', right: '0px', bottom: '0px'}}>
                    <div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}>
                      <div style={{width: '1px'}} />
                      <div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: '1px'}} />
                    </div>
                    <div style={{position: 'relative', paddingRight: '6px', paddingLeft: '6px', boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a target="_blank" rel="noopener noreferrer" title="Signaler à Google une erreur dans la carte routière ou les images" href="https://www.google.com/maps/@48.865633,2.321236,10z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: '10px', color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative'}}>Signaler une erreur cartographique</a></div>
                  </div>
                  <div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={40} controlheight={153} style={{margin: '10px', userSelect: 'none', position: 'absolute', bottom: '167px', right: '40px'}}>
                    <div className="gmnoprint" controlwidth={40} controlheight={81} style={{position: 'absolute', left: '0px', top: '72px'}}>
                      <div draggable="false" style={{userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: '40px', height: '81px'}}>
                        <button draggable="false" title="Zoom avant" aria-label="Zoom avant" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button>
                        <div style={{position: 'relative', overflow: 'hidden', width: '30px', height: '1px', margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: '0px'}} />
                        <button draggable="false" title="Zoom arrière" aria-label="Zoom arrière" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: '40px', height: '40px', top: '0px', left: '0px'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button>
                      </div>
                    </div>
                    <div className="gm-svpc" dir="ltr" title="Faites glisser Pegman sur la carte pour ouvrir Street View" controlwidth={40} controlheight={40} style={{backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px', width: '40px', height: '40px', cursor: 'url("http://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'none', position: 'absolute', left: '0px', top: '0px'}}>
                      <div style={{position: 'absolute', left: '50%', top: '50%'}} />
                      <div style={{position: 'absolute', left: '50%', top: '50%'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2223%22%20height%3D%2238%22%20viewBox%3D%220%200%2023%2038%22%3E%0A%3Cpath%20d%3D%22M16.6%2C38.1h-5.5l-0.2-2.9-0.2%2C2.9h-5.5L5%2C25.3l-0.8%2C2a1.53%2C1.53%2C0%2C0%2C1-1.9.9l-1.2-.4a1.58%2C1.58%2C0%2C0%2C1-1-1.9v-0.1c0.3-.9%2C3.1-11.2%2C3.1-11.2a2.66%2C2.66%2C0%2C0%2C1%2C2.3-2l0.6-.5a6.93%2C6.93%2C0%2C0%2C1%2C4.7-12%2C6.8%2C6.8%2C0%2C0%2C1%2C4.9%2C2%2C7%2C7%2C0%2C0%2C1%2C2%2C4.9%2C6.65%2C6.65%2C0%2C0%2C1-2.2%2C5l0.7%2C0.5a2.78%2C2.78%2C0%2C0%2C1%2C2.4%2C2s2.9%2C11.2%2C2.9%2C11.3a1.53%2C1.53%2C0%2C0%2C1-.9%2C1.9l-1.3.4a1.63%2C1.63%2C0%2C0%2C1-1.9-.9l-0.7-1.8-0.1%2C12.7h0Zm-3.6-2h1.7L14.9%2C20.3l1.9-.3%2C2.4%2C6.3%2C0.3-.1c-0.2-.8-0.8-3.2-2.8-10.9a0.63%2C0.63%2C0%2C0%2C0-.6-0.5h-0.6l-1.1-.9h-1.9l-0.3-2a4.83%2C4.83%2C0%2C0%2C0%2C3.5-4.7A4.78%2C4.78%200%200%2C0%2011%202.3H10.8a4.9%2C4.9%2C0%2C0%2C0-1.4%2C9.6l-0.3%2C2h-1.9l-1%2C.9h-0.6a0.74%2C0.74%2C0%2C0%2C0-.6.5c-2%2C7.5-2.7%2C10-3%2C10.9l0.3%2C0.1%2C2.5-6.3%2C1.9%2C0.3%2C0.2%2C15.8h1.6l0.6-8.4a1.52%2C1.52%2C0%2C0%2C1%2C1.5-1.4%2C1.5%2C1.5%2C0%2C0%2C1%2C1.5%2C1.4l0.9%2C8.4h0Zm-10.9-9.6h0Zm17.5-.1h0Z%22%20style%3D%22fill%3A%23333%3Bopacity%3A0.7%3Bisolation%3Aisolate%22%2F%3E%0A%3Cpath%20d%3D%22M5.9%2C13.6l1.1-.9h7.8l1.2%2C0.9%22%20style%3D%22fill%3A%23ce592c%22%2F%3E%0A%3Cellipse%20cx%3D%2210.9%22%20cy%3D%2213.1%22%20rx%3D%222.7%22%20ry%3D%220.3%22%20style%3D%22fill%3A%23ce592c%3Bopacity%3A0.5%3Bisolation%3Aisolate%22%2F%3E%0A%3Cpath%20d%3D%22M20.6%2C26.1l-2.9-11.3a1.71%2C1.71%2C0%2C0%2C0-1.6-1.2H5.7a1.69%2C1.69%2C0%2C0%2C0-1.5%2C1.3l-3.1%2C11.3a0.61%2C0.61%2C0%2C0%2C0%2C.3.7l1.1%2C0.4a0.61%2C0.61%2C0%2C0%2C0%2C.7-0.3l2.7-6.7%2C0.2%2C16.8h3.6l0.6-9.3a0.47%2C0.47%2C0%2C0%2C1%2C.44-0.5h0.06c0.4%2C0%2C.4.2%2C0.5%2C0.5l0.6%2C9.3h3.6L15.7%2C20.3l2.5%2C6.6a0.52%2C0.52%2C0%2C0%2C0%2C.66.31h0l1.2-.4a0.57%2C0.57%2C0%2C0%2C0%2C.5-0.7h0Z%22%20style%3D%22fill%3A%23fdbf2d%22%2F%3E%0A%3Cpath%20d%3D%22M7%2C13.6l3.9%2C6.7%2C3.9-6.7%22%20style%3D%22fill%3A%23cf572e%3Bopacity%3A0.6%3Bisolation%3Aisolate%22%2F%3E%0A%3Ccircle%20cx%3D%2210.9%22%20cy%3D%227%22%20r%3D%225.9%22%20style%3D%22fill%3A%23fdbf2d%22%2F%3E%0A%3C%2Fsvg%3E%0A" aria-label="Contrôle de Pegman dans Street View" style={{height: '30px', width: '30px', position: 'absolute', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20width%3D%2224px%22%20height%3D%2238px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2024%2038%22%3E%0A%3Cpath%20d%3D%22M22%2C26.6l-2.9-11.3a2.78%2C2.78%2C0%2C0%2C0-2.4-2l-0.7-.5a6.82%2C6.82%2C0%2C0%2C0%2C2.2-5%2C6.9%2C6.9%2C0%2C0%2C0-13.8%2C0%2C7%2C7%2C0%2C0%2C0%2C2.2%2C5.1l-0.6.5a2.55%2C2.55%2C0%2C0%2C0-2.3%2C2s-3%2C11.1-3%2C11.2v0.1a1.58%2C1.58%2C0%2C0%2C0%2C1%2C1.9l1.2%2C0.4a1.63%2C1.63%2C0%2C0%2C0%2C1.9-.9l0.8-2%2C0.2%2C12.8h11.3l0.2-12.6%2C0.7%2C1.8a1.54%2C1.54%2C0%2C0%2C0%2C1.5%2C1%2C1.09%2C1.09%2C0%2C0%2C0%2C.5-0.1l1.3-.4a1.85%2C1.85%2C0%2C0%2C0%2C.7-2h0Zm-1.2.9-1.2.4a0.61%2C0.61%2C0%2C0%2C1-.7-0.3l-2.5-6.6-0.2%2C16.8h-9.4L6.6%2C21l-2.7%2C6.7a0.52%2C0.52%2C0%2C0%2C1-.66.31h0l-1.1-.4a0.52%2C0.52%2C0%2C0%2C1-.31-0.66v0l3.1-11.3a1.69%2C1.69%2C0%2C0%2C1%2C1.5-1.3h0.2l1-.9h2.3a5.9%2C5.9%2C0%2C1%2C1%2C3.2%2C0h2.3l1.1%2C0.9h0.2a1.71%2C1.71%2C0%2C0%2C1%2C1.6%2C1.2l2.9%2C11.3a0.84%2C0.84%2C0%2C0%2C1-.4.7h0Z%22%20style%3D%22fill%3A%23333%3Bfill-opacity%3A0.2%22%2F%3E%22%0A%3C%2Fsvg%3E%0A%0A" aria-label="Pegman est au-dessus de la carte" style={{display: 'none', height: '30px', width: '30px', position: 'absolute', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20width%3D%2240px%22%20height%3D%2250px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2040%2050%22%3E%0A%3Cpath%20d%3D%22M34.00%2C-30.40l-2.9-11.3a2.78%2C2.78%2C0%2C0%2C0-2.4-2l-0.7-.5a6.82%2C6.82%2C0%2C0%2C0%2C2.2-5%2C6.9%2C6.9%2C0%2C0%2C0-13.8%2C0%2C7%2C7%2C0%2C0%2C0%2C2.2%2C5.1l-0.6.5a2.55%2C2.55%2C0%2C0%2C0-2.3%2C2s-3%2C11.1-3%2C11.2v0.1a1.58%2C1.58%2C0%2C0%2C0%2C1%2C1.9l1.2%2C0.4a1.63%2C1.63%2C0%2C0%2C0%2C1.9-.9l0.8-2%2C0.2%2C12.8h11.3l0.2-12.6%2C0.7%2C1.8a1.54%2C1.54%2C0%2C0%2C0%2C1.5%2C1%2C1.09%2C1.09%2C0%2C0%2C0%2C.5-0.1l1.3-.4a1.85%2C1.85%2C0%2C0%2C0%2C.7-2h0Zm-1.2.9-1.2.4a0.61%2C0.61%2C0%2C0%2C1-.7-0.3l-2.5-6.6-0.2%2C16.8h-9.4L18.60%2C-36.00l-2.7%2C6.7a0.52%2C0.52%2C0%2C0%2C1-.66.31h0l-1.1-.4a0.52%2C0.52%2C0%2C0%2C1-.31-0.66v0l3.1-11.3a1.69%2C1.69%2C0%2C0%2C1%2C1.5-1.3h0.2l1-.9h2.3a5.9%2C5.9%2C0%2C1%2C1%2C3.2%2C0h2.3l1.1%2C0.9h0.2a1.71%2C1.71%2C0%2C0%2C1%2C1.6%2C1.2l2.9%2C11.3a0.84%2C0.84%2C0%2C0%2C1-.4.7h0Zm1.2%2C59.1-2.9-11.3a2.78%2C2.78%2C0%2C0%2C0-2.4-2l-0.7-.5a6.82%2C6.82%2C0%2C0%2C0%2C2.2-5%2C6.9%2C6.9%2C0%2C0%2C0-13.8%2C0%2C7%2C7%2C0%2C0%2C0%2C2.2%2C5.1l-0.6.5a2.55%2C2.55%2C0%2C0%2C0-2.3%2C2s-3%2C11.1-3%2C11.2v0.1a1.58%2C1.58%2C0%2C0%2C0%2C1%2C1.9l1.2%2C0.4a1.63%2C1.63%2C0%2C0%2C0%2C1.9-.9l0.8-2%2C0.2%2C12.8h11.3l0.2-12.6%2C0.7%2C1.8a1.54%2C1.54%2C0%2C0%2C0%2C1.5%2C1%2C1.09%2C1.09%2C0%2C0%2C0%2C.5-0.1l1.3-.4a1.85%2C1.85%2C0%2C0%2C0%2C.7-2h0Zm-1.2.9-1.2.4a0.61%2C0.61%2C0%2C0%2C1-.7-0.3l-2.5-6.6-0.2%2C16.8h-9.4L18.60%2C24.00l-2.7%2C6.7a0.52%2C0.52%2C0%2C0%2C1-.66.31h0l-1.1-.4a0.52%2C0.52%2C0%2C0%2C1-.31-0.66v0l3.1-11.3a1.69%2C1.69%2C0%2C0%2C1%2C1.5-1.3h0.2l1-.9h2.3a5.9%2C5.9%2C0%2C1%2C1%2C3.2%2C0h2.3l1.1%2C0.9h0.2a1.71%2C1.71%2C0%2C0%2C1%2C1.6%2C1.2l2.9%2C11.3a0.84%2C0.84%2C0%2C0%2C1-.4.7h0Z%22%20style%3D%22fill%3A%23333%3Bfill-opacity%3A0.2%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M15.40%2C38.80h-4a1.64%2C1.64%2C0%2C0%2C1-1.4-1.1l-3.1-8a0.9%2C0.9%2C0%2C0%2C1-.5.1l-1.4.1a1.62%2C1.62%2C0%2C0%2C1-1.6-1.4l-1.1-13.1%2C1.6-1.3a6.87%2C6.87%2C0%2C0%2C1-3-4.6A7.14%2C7.14%200%200%2C1%202%204a7.6%2C7.6%2C0%2C0%2C1%2C4.7-3.1%2C7.14%2C7.14%2C0%2C0%2C1%2C5.5%2C1.1%2C7.28%2C7.28%2C0%2C0%2C1%2C2.3%2C9.6l2.1-.1%2C0.1%2C1c0%2C0.2.1%2C0.5%2C0.1%2C0.8a2.41%2C2.41%2C0%2C0%2C1%2C1%2C1s1.9%2C3.2%2C2.8%2C4.9c0.7%2C1.2%2C2.1%2C4.2%2C2.8%2C5.9a2.1%2C2.1%2C0%2C0%2C1-.8%2C2.6l-0.6.4a1.63%2C1.63%2C0%2C0%2C1-1.5.2l-0.6-.3a8.93%2C8.93%2C0%2C0%2C0%2C.5%2C1.3%2C7.91%2C7.91%2C0%2C0%2C0%2C1.8%2C2.6l0.6%2C0.3v4.6l-4.5-.1a7.32%2C7.32%2C0%2C0%2C1-2.5-1.5l-0.4%2C3.6h0Zm-10-19.2%2C3.5%2C9.8%2C2.9%2C7.5h1.6V35l-1.9-9.4%2C3.1%2C5.4a8.24%2C8.24%2C0%2C0%2C0%2C3.8%2C3.8h2.1v-1.4a14%2C14%2C0%2C0%2C1-2.2-3.1%2C44.55%2C44.55%2C0%2C0%2C1-2.2-8l-1.3-6.3%2C3.2%2C5.6c0.6%2C1.1%2C2.1%2C3.6%2C2.8%2C4.9l0.6-.4c-0.8-1.6-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a0.54%2C0.54%2C0%2C0%2C0-.4-0.3l-0.7-.1-0.1-.7a4.33%2C4.33%2C0%2C0%2C0-.1-0.5l-5.3.3%2C2.2-1.9a4.3%2C4.3%2C0%2C0%2C0%2C.9-1%2C5.17%2C5.17%2C0%2C0%2C0%2C.8-4%2C5.67%2C5.67%2C0%2C0%2C0-2.2-3.4%2C5.09%2C5.09%2C0%2C0%2C0-4-.8%2C5.67%2C5.67%2C0%2C0%2C0-3.4%2C2.2%2C5.17%2C5.17%2C0%2C0%2C0-.8%2C4%2C5.67%2C5.67%2C0%2C0%2C0%2C2.2%2C3.4%2C3.13%2C3.13%2C0%2C0%2C0%2C1%2C.5l1.6%2C0.6-3.2%2C2.6%2C1%2C11.5h0.4l-0.3-8.2h0Z%22%20style%3D%22fill%3A%23333%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M3.35%2C15.90l1.1%2C12.5a0.39%2C0.39%2C0%2C0%2C0%2C.36.42l0.14%2C0%2C1.4-.1a0.66%2C0.66%2C0%2C0%2C0%2C.5-0.4l-0.2-3.8-3.3-8.6h0Z%22%20style%3D%22fill%3A%23fdbf2d%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M5.20%2C28.80l1.1-.1a0.66%2C0.66%2C0%2C0%2C0%2C.5-0.4l-0.2-3.8-1.2-3.1Z%22%20style%3D%22fill%3A%23ce592b%3Bfill-opacity%3A0.25%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M21.40%2C35.70l-3.8-1.2-2.7-7.8L12.00%2C15.5l3.4-2.9c0.2%2C2.4%2C2.2%2C14.1%2C3.7%2C17.1%2C0%2C0%2C1.3%2C2.6%2C2.3%2C3.1v2.9m-8.4-8.1-2-.3%2C2.5%2C10.1%2C0.9%2C0.4v-2.9%22%20style%3D%22fill%3A%23e5892b%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M17.80%2C25.40c-0.4-1.5-.7-3.1-1.1-4.8-0.1-.4-0.1-0.7-0.2-1.1l-1.1-2-1.7-1.6s0.9%2C5%2C2.4%2C7.1a19.12%2C19.12%2C0%2C0%2C0%2C1.7%2C2.4h0Z%22%20style%3D%22fill%3A%23cf572e%3Bopacity%3A0.6%3Bisolation%3Aisolate%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M14.40%2C37.80h-3a0.43%2C0.43%2C0%2C0%2C1-.4-0.4l-3-7.8-1.7-4.8-3-9%2C8.9-.4s2.9%2C11.3%2C4.3%2C14.4c1.9%2C4.1%2C3.1%2C4.7%2C5%2C5.8h-3.2s-4.1-1.2-5.9-7.7a0.59%2C0.59%2C0%2C0%2C0-.6-0.4%2C0.62%2C0.62%2C0%2C0%2C0-.3.7s0.5%2C2.4.9%2C3.6a34.87%2C34.87%2C0%2C0%2C0%2C2%2C6h0Z%22%20style%3D%22fill%3A%23fdbf2d%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M15.40%2C12.70l-3.3%2C2.9-8.9.4%2C3.3-2.7%22%20style%3D%22fill%3A%23ce592b%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M9.10%2C21.10l1.4-6.2-5.9.5%22%20style%3D%22fill%3A%23cf572e%3Bopacity%3A0.6%3Bisolation%3Aisolate%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M12.00%2C13.5a4.75%2C4.75%2C0%2C0%2C1-2.6%2C1.1c-1.5.3-2.9%2C0.2-2.9%2C0s1.1-.6%2C2.7-1%22%20style%3D%22fill%3A%23bb3d19%22%3E%3C%2Fpath%3E%0A%3Ccircle%20cx%3D%227.92%22%20cy%3D%228.19%22%20r%3D%226.3%22%20style%3D%22fill%3A%23fdbf2d%22%3E%3C%2Fcircle%3E%0A%3Cpath%20d%3D%22M4.70%2C13.60a6.21%2C6.21%2C0%2C0%2C0%2C8.4-1.9v-0.1a8.89%2C8.89%2C0%2C0%2C1-8.4%2C2h0Z%22%20style%3D%22fill%3A%23ce592b%3Bfill-opacity%3A0.25%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M21.20%2C27.20l0.6-.4a1.09%2C1.09%2C0%2C0%2C0%2C.4-1.3c-0.7-1.5-2.1-4.6-2.8-5.8-0.9-1.7-2.8-4.9-2.8-4.9a1.6%2C1.6%2C0%2C0%2C0-2.17-.65l-0.23.15a1.68%2C1.68%2C0%2C0%2C0-.4%2C2.1s2.3%2C3.9%2C3.1%2C5.3c0.6%2C1%2C2.1%2C3.7%2C2.9%2C5.1a0.94%2C0.94%2C0%2C0%2C0%2C1.24.49l0.16-.09h0Z%22%20style%3D%22fill%3A%23fdbf2d%22%3E%3C%2Fpath%3E%0A%3Cpath%20d%3D%22M19.40%2C19.80c-0.9-1.7-2.8-4.9-2.8-4.9a1.6%2C1.6%2C0%2C0%2C0-2.17-.65l-0.23.15-0.3.3c1.1%2C1.5%2C2.9%2C3.8%2C3.9%2C5.4%2C1.1%2C1.8%2C2.9%2C5%2C3.8%2C6.7l0.1-.1a1.09%2C1.09%2C0%2C0%2C0%2C.4-1.3%2C57.67%2C57.67%2C0%2C0%2C0-2.7-5.6h0Z%22%20style%3D%22fill%3A%23ce592b%3Bfill-opacity%3A0.25%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A" aria-label="Contrôle de Pegman dans Street View" style={{display: 'none', height: '40px', width: '40px', position: 'absolute', transform: 'translate(-60%, -45%)', pointerEvents: 'none'}} /></div>
                    </div>
                    <div className="gmnoprint" controlwidth={40} controlheight={40} style={{display: 'none', position: 'absolute'}}>
                      <div style={{width: '40px', height: '40px'}}>
                        <button draggable="false" title="Faire pivoter la carte à 90°" aria-label="Faire pivoter la carte à 90°" type="button" className="gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'none', border: '0px', margin: '0px 0px 32px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '18px', width: '18px'}} /></button>
                        <button draggable="false" title="Incliner la carte" aria-label="Incliner la carte" type="button" className="gm-tilt gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'block', border: '0px', margin: '0px', padding: '0px', position: 'relative', cursor: 'pointer', userSelect: 'none', width: '40px', height: '40px', top: '0px', left: '0px', overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: '2px'}}><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: '18px'}} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resize-sensor" style={{position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}>
              <div className="resize-sensor-expand" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}>
                <div style={{position: 'absolute', left: '0px', top: '0px', transition: 'all 0s ease 0s', width: '410px', height: '1271px'}} />
              </div>
              <div className="resize-sensor-shrink" style={{position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, visibility: 'hidden'}}>
                <div style={{position: 'absolute', left: 0, top: 0, transition: '0s', width: '200%', height: '200%'}} />
              </div>
            </div>
          </div>
        </aside>
        {/* /aside */}
      </div>
    </div>
    
    );
}

export default Afterlogin;
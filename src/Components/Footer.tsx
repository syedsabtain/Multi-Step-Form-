import React from 'react'


const Footer =()=>{

    return(
        <footer className="page-footer font-small cyan darken-3 fixed-bottom">
  <div className="container">
    <div className="row">
      <div className="col-md-12 py-5">
        <div className="mb-2 flex-center">
          <a className="fb-ic">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="gplus-ic">
          
            <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="pin-ic">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://github.com/syedsabtain" className='text-white'> SyedSabtain</a>
  </div>
</footer>

    )
}


export default Footer
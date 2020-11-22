import React from 'react'


const Footer =()=>{

    return(
        <footer className="page-footer font-small cyan darken-3 fixed-bottom">
  <div className="container">
    <div className="row">
      <div className="col-md-12 py-5">
        <div className="mb-2 flex-center">
          <span className="fb-ic">
            <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </span>
          <span className="tw-ic">
            <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </span>
          <a className="gplus-ic" href='https://github.com/syedsabtain/Multi-Step-Form-'>
          
            <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <span className="li-ic">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </span>
          <span className="ins-ic">
            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </span>
          <span className="pin-ic">
            <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </span>
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
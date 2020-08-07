import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

  class LogIn extends Component {
    render() {
        return (
            <section>
            <div class="container mt-5">
              <div class="row" id="form-inputs">
                <div class="col-md-8 mx-auto">
                  <div class="carda mb-3">
                    <div class="row no-gutters">
                      <div class="col-md-8">
                        <div class="card-body">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Qe42BK70LjD5j2UUe5LKExgoaYgOx7qMU00n5H810iLP1Q-D&usqp=CAU"
                            height="20px"
                            class="imglog mx-auto d-block"
                          />
                          <form onSubmit={this.onSubmit}> 
                            <div class="form-group">
                              <div class="row">
                                <div class="col-md-1">
                                  <i class="fas fa-envelope pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                  <input
                                    type="email"
                                    class="form-control border-top-0 border-left-0 border-right-0"
                                    name="email"
                               
                                    onChange={this.onChange}
                                    placeholder="Email"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="row">
                                <div class="col-md-1">
                                  <i class="fas fa-key pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                  <input
                                    type="password"
                                    name="password"
                                    className='mb-3'
                                   
                                    onChange={this.onChange}
                                    class="form-control border-top-0 border-left-0 border-right-0"
                                    placeholder="Password"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
    
                            <div class="text-center">
                              <button type="submit" class="btn btn-danger">
                                Login
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}
 

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

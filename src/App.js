import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './imagenes/koopa.png'
import './App.css'




export const App = () => {

  return (



    <div className='container w-75 bg-primary mt-5 rounded shadow'>
      <div className='row align-items-stretch'>



         <div className='col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6'>

          </div>


         <div className='col bg-white p-5 rounded-end'>

            <div className='text-end'>
              <img  src={logo} width='48px'></img>

            </div>
              <h2 className='fw-bold text-center pt-5 mb-5'>Login</h2>

              <form action='#'>


                <div className='mb-4'>
                  <label  className='form-label'>Correo electronico</label>
                  <input type='email' className='form-control' name='email'/>
                </div>


                <div className='mb-4'></div>
                <label className='form-label'>contraseña</label>
                  <input type='password' className='form-control mb-5' name='email'/>

                
                  <div className='d-grid'>
                  <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
                  </div>

                  <div className='mb-4 form-chec'></div>
                <input className="form-check-input" name='connected' type="checkbox" value="" id="pepe"/>
                <label for='connected' className='form-check-label'>Permanecer conectado</label>



                  <div className='my-3'>
                  <span>No tienes cuenta <a href='#'>Registrate aqui</a></span>
                  
                  </div>
                  
              </form>

          </div>



      </div>
      
    </div>



  )
}

export default App

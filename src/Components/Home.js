import React, { useState } from 'react'

function Home() {

  const [client,setClient] = useState({email:'',password:''})
  const [isLogIn,setIsLogIn] = useState(false)
  const [showForm,setShowForm] = useState(false)
  const [todo,setTodo] = useState('')
  const [taskArray,setTaskArray] = useState([])

  const handleShowForm = () =>{
    setShowForm(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let gettingValue = new FormData(e.target)
    setClient({email:gettingValue.get('email')})
    setClient({password:gettingValue.get('password')})
    console.log(client)
    setIsLogIn(true)
    console.log(isLogIn)
    setShowForm(false)

  }


  const handleTODO = (e) =>{
    e.preventDefault()
    setTaskArray([...taskArray,todo])
    e.target[0].value = ""
  }

  const handleLogOut = () =>{
    setShowForm(false)
    setIsLogIn(false)
    setTaskArray([])
  }

  return (
    <>
      {
        isLogIn ? <div className='welcome'>
                      
                      <div className='logoutButton'>
                        <button className='btn btn-danger'><span onClick={handleLogOut}>logout</span></button>
                      </div>
                      <h2>Welcome to TODO App</h2>
                      
                  </div> : null
      }

      <div className='home'>
      
      {
        showForm ? 
          <form onSubmit={handleFormSubmit} className='form-group'>
            <label htmlFor='email'>Enter Email</label>
            <input type='text' name='email' id='email' className='form-control' placeholder='johnDaulton@gmail.com'/>
            <label htmlFor='email'>Enter Password</label>
            <input type='password' className='form-control' name='password' id='password' placeholder='**********'/>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>

          : 

          isLogIn === false
             ? <h3>Please <span onClick={handleShowForm}>LOGIN</span></h3>  
             : <div className='todoAppParent'>
                
                <form onSubmit={handleTODO} className='form-group'>
                  <label htmlFor='todo'>Enter Some Task</label>
                  <div className='col-md-10'>
                    <input className='form-control ' placeholder='Brush your teeth twice a day' onChange={(e)=>{setTodo(e.target.value)}}/>
                    <button type='submit' className='col-sm-2 btn btn-primary'>ADD</button>
                  </div>
                  
                </form>
                <div className='toShowTask' style={taskArray.length !== 0 ? {border : '2px solid blue'} : {display : 'none'} }>
                  {
                    taskArray.map((item,idx)=>{
                      return (
                        <div key={idx} className="taskDiv"> 
                          <h4 className='col-sm-10'>{item}</h4>
                          <button 
                              className='button button-primary mb-2'
                              onClick={()=>{
                              taskArray.splice(idx,1)
                              setTaskArray(taskArray => [...taskArray])
                          }}>Del</button>
                        </div>
                        
                      )
                    })
                  }
                </div>
                {/* <h4>You can <span id='logoutButton' onClick={handleLogOut}>logout</span> if you are done</h4> */}

             </div> 
        
        }
      
      
      </div>
    </>
    
  )
}

export default Home

import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import axios from 'axios'
import './App.css'
 class App extends Component {

  state={
    title:'',
    body:'',
    posts:[]
  }

componentDidMount=()=>{
  this.getBlogPost()
}


  getBlogPost=()=>{
    axios.get('/api')
    .then((res)=>{
      const data = res.data
      this.setState({posts:data})


      console.log('Data has been received!!')
    })
    .catch(()=>alert('Error retrieving data!!'))
  }


handleChange=({target})=>{
  const{name,value} = target
  this.setState({ [name]:value})
}

handleSubmit=(e)=>{
  e.preventDefault()

  const payload = {
    title:this.state.title,
    body:this.state.body
  }

 
  axios({
    url:'/api/save',
    method:'POST',
    data:payload
  })
  .then((res)=>{
      console.log('Data has been sent to server',res)
      this.resetInputs()
      this.getBlogPost()

    })
    .catch((err)=>{
      console.log('Internal server error',err)
    })
}

resetInputs=()=>{
  this.setState({
    title:'',
    body:''
  })
}

displayPost=(posts)=>{
  if(!posts.length)return null

 return posts.map((post,index)=>(
    <div key={index} className="blog-post_display">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))
 }

  render() {
    // console.log('State',this.state)
    return (
     
      <div className="app">
        <h2>Welcome to my App (with React)</h2>
        {/* <div>
        <AppNavbar/>
        <ShoppingList/>
      </div>
         */}
        <form  onSubmit={this.handleSubmit} className='items'>
          <div className="form-input">
             <input
             type='text'
             name='title'
             value={this.state.title}
             placeholder="Title"
             onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            
            <textarea placeholder="body" name="body" col="30"  rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
            
          </div>
          <button>Submit</button>
        </form>

        <div className='blog-'>
          {this.displayPost(this.state.posts)}
        </div>
      </div>
    )
  }
}

export default App

# tuvideo-backend
Backend for group project TuVideo (Youtube Clone)

## Instructions

1. Make sure to create your own branch and push only to DEVELOP branch.
2. Once you pull the repository, use ``npm install`` to install node_modules.
3. Always make sure to be in this repository and not in the Frontend repository.
4. Create your own ``.env`` file in order to add your enviroment variables. ``PORT=3000`` is mandatory.

## Important

1. We will have one (1) single collection called ``users``where it will be managed all our database data. Here's an idea of how it will look:
```
const user ={
  _id:345445,
  email:"cajrlos@hot.com",
  pass:"sdfsdfsdfds",
  isLogged:false,
  subcribedChannels:["canal1", "canal2", "canal3"],
  channel:{
    channelName: "Carlos channel",
    avatar:"/image.jpg",
    banner:"/image.jpg",
    date:"timestamp",
    videos:[
      {
        _id:34534534,
        url:"/video.mp4",
        title:"title",
        category:"category",
        tags:["carlos", "juan", "juan"],
        thumbnail:"/img.jpg",
        description:"hola",
        date: "timestamp",
        views:0,
        likes: 0,
        comments:[
          {
            _id:45645644,
            author:"Carlos",
            text:"hola no me gustó",
          }
        ]
      } 
    ]
  }
}

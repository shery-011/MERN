const Promise = new Promise((res)=>{
      setInterval(() => {
        console.log(new Date())
      }, 1000);
    })
  
  
  Promise.then = ((val)=>{
    console.log(val)
  })

  
 
  
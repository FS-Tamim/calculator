  const btns=document.querySelectorAll(".input");
   let output="";
   let result;


btns.forEach(function(btn){
    btn.addEventListener("click",function(e){

        const classes=e.currentTarget.classList;

        
  
        if(classes.contains("clr")){     
            console.log("hi");     
          document.querySelector(".inputdisplay").value=0;
         document.querySelector(".result").value=0;
         document.querySelector(".result").style.display="none";
          output="";
         

        }
        if(classes.contains("back") ){
            output=output.toString().slice(0,-1);
            document.querySelector(".inputdisplay").value=output;
    
            const sign=output.slice(-1);
            const signnum=parseFloat(sign);
            if(!isNaN(signnum)){
              result=eval(output);
              document.querySelector(".result").value="="+result;
            }else{
              if(sign=="+"||sign=="-"){
                output=output+0;
                result=eval(output);
                document.querySelector(".result").value="="+result;
                output=output.slice(0,-1);
              }else{
                output=output+1;
                result=eval(output);
                document.querySelector(".result").value="="+result;
                output=output.slice(0,-1);

              }
            }
          if(output.length==0){
            document.querySelector(".result").value=0;
          }
        }
    
      
   
      if(!classes.contains("equal") && !classes.contains("clr")){
          
        const value=e.currentTarget.value;
        output+=value;
        document.querySelector(".inputdisplay").value=output;
    }  
    
    if(!classes.contains("sign") && output.length>0 )
     {     
          
          const sign=output.slice(-1);
            const signnum=parseFloat(sign);
            if(!isNaN(signnum)){
              result=eval(output);
              document.querySelector(".result").value="="+result;
            }
            
          document.querySelector(".result").style.display="block";
         
        
          
    }
    if(classes.contains("equal") && output.length>0){
        result=eval(output);
        document.querySelector(".inputdisplay").value=result;
        document.querySelector(".result").style.display="none";
        output=result;
       
    }
  
    });
});


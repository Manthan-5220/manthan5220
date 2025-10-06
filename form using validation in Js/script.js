// creating  function to clear the number filde

function clrData()
{
 document.getElementById("result").value ="";
}

function sliceData()
{
    var slc=document.getElementById("result").value;
    var res=slc.slice(0,-1);
    document.getElementById("result").value=res;
}

function inputDisplay(val)
{
     document.getElementById("result").value+=val;
     console.log(val);
     
}

function arth()
{
    let a=document.getElementById("result").value;
    let b=eval(a)
    document.getElementById("result").value=b;
}

function sqr()
{
   
   let a= document.getElementById("result").value  
    document.getElementById("result").value = Math.pow((a),2)
}

function sqrt()
{
   
   let a= document.getElementById("result").value  
    document.getElementById("result").value = Math.sqrt(a)
}

function cuberoot()
{
    let a=document.getElementById("result").value;
    document.getElementById("result").value=Math.cbrt(a)
}

function cube()
{
   
   let a= document.getElementById("result").value  
    document.getElementById("result").value = Math.pow((a),3)
}

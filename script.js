class jQuery{
   constructor(id){
    this.id=id
    
   }
  
   setContent(str){
    document.getElementById(this.id).innerHTML = str;
    return document.getElementById(this);
   }
   
   append(str){
    document.getElementById(this.id).innerHTML +=str;
      
    return document.getElementById(this);
   }
   setColor(color){
    document.getElementById(this.id).style.color = color;
    return document.getElementById(this);
   }
   setBackgroundColor(color){
    document.getElementById(this.id).style.backgroundColor =color
    return document.getElementById(this);
   }
}

function $(str){
    const jQ=new jQuery(str);
    return jQ;
}
$("test").setContent("hello new jQuery").append(" : I append this text")
$("test").setBackgroundColor("green")

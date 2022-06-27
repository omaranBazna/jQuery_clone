class jQuery{
   constructor(id){
    this.id=id
    
   }
  
   setContent(str){
    document.getElementById(this.id).innerHTML = str;
    return document.getElementById(this.id);
   }
   
   append(str){
    document.getElementById(this.id).innerHTML +=str;
      
    return document.getElementById(this.id);
   }
   setColor(color){
    document.getElementById(this.id).style.color = color;
    return document.getElementById(this.id);
   }
   setBackgroundColor(color){
    document.getElementById(this.id).style.backgroundColor = color;
    return document.getElementById(this.id);
   }
}

function $(str){
    const jQ=new jQuery(str);
    return jQ;
}
$("test").setContent("hello new jQuery").append(" : I append this text").setBackgroundColor("green")

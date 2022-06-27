class jQuery{
   constructor(id){
    this.element=document.getElementById(id)
    
   }
  
   setContent(str){
    this.element.innerHTML = str;
    return this.element;
   }
   
   append(str){
    this.element.innerHTML +=str;
    return this.element;
   }
   setColor(color){
    this.element.style.color=color;
    return this.element;
   }
   
}

function $(str){
    const jQ=new jQuery(str);
    return jQ;
}
$("test").setContent("hello new jQuery").append(" : I append this text").setColor("red")

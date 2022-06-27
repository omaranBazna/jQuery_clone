class jQuery{
   constructor(id){
    this.id=id
    
   }
  
   setContent(str){
    document.getElementById(this.id).innerHTML = str;
    return this
   }
   
   append(str){
    document.getElementById(this.id).innerHTML +=str;
      
    return this
   }
   setColor(color){
    document.getElementById(this.id).style.color = color;
    return this
   }
   setBackgroundColor(color){
    document.getElementById(this.id).style.backgroundColor =color
    return this
   }
   setFontSize(size){
    document.getElementById(this.id).style.fontSize=size
    return this
   }
}

function $(str){
    const jQ=new jQuery(str);
    return jQ;
}
$("test").setContent("hello new jQuery").append(" : I append this text").setBackgroundColor("green").setColor("red").setFontSize("30px");

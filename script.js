class jQuery{
   constructor(id){
    this.element=document.getElementById(id)
    return this.element;
   }
  /*
   setContent(str){
    this.element.innerHTML = str;
    return this.element;
   }
   append(str){
    this.element.innerHTML +=str;
    return this.element;
   }
   */
}
function $(str){
    const jQ=new jQuery(str);
    return jQ;
}
$("test").innerHTML= "hello jQuery world";
 const clearElement = function(element){
   while (element.firstChild){
     element.removeChild(element.firstChild); 
   }
}

export default clearElement;

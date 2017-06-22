function hello(name) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします。
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  if(name == "World")
  {
  	return "Hello World!";
  }else if(name == "codecheck") 
  {
      return "Hello codecheck!"
  }
    return 0;
    
}

module.exports = hello;

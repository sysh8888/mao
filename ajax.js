 function Ajax(url,fnSucc,fnFaild)

             {

                  //1.创建ajax对象

                if(window.XMLHttpRequest)

                 {// code for IE7+, Firefox, Chrome, Opera, Safari

                      var oAjax=new XMLHttpRequest();

                 }

                else

                 {// code for IE6, IE5

                     var oAjax=new ActiveXObject("Microsoft.XMLHTTP");

                 }

                 //2.链接服务器（打开服务器的连接）

                 //open(方法，文件名，异步传输)

                 oAjax.open('GET',url,true);

                 //3.发送

                 oAjax.send();

                 //4.接收返回

                 oAjax.onreadystatechange=function()

                    {

                      if (oAjax.readyState==4)

                      {

                        if(oAjax.status==200)

                          { 

                            fnSucc(oAjax.responseText);  

                          }

                       else

                          {

                           fnFaild(oAjax.status);

                          }

                      };

                 };

              }

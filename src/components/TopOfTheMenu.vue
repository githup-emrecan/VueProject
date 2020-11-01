<template>
    <header>
 <div class="container">
       <div id="search-box">
            <table class="elementscontainer">
                <tr>
                    <td>
                        <input type="text"  class="search">
                    </td>
                    <td>
                        <a href="#"><img src="../assets/search.png" alt="" class="material-icons"></a>
                    </td>
                </tr>
            </table>
         </div>
 </div>
        <div class="header-logo">
            <a href="#"><img src="../assets/coffeemania-logo.png" alt="" ></a>
        </div>
        <div id="right-box">
            <section>
                <nav>
                    <ul>
                        <li><a href="#"><img src="../assets/tr.png" alt=""><img src="../assets/down-arrow.png" alt="" class="down"></a>
                        <ul>
                            <li ><a href=""><img src="../assets/tr.png" alt=""></a></li>
                             <li><a href=""><img src="../assets/en.png" alt="" ></a></li>
                        </ul></li>
                    </ul>
                </nav>
            </section> 
            <section>
                <img src="../assets/user.png" alt="">
           </section>
           <section>
               <img src="../assets/ecommerce.png" alt="">
          </section>       
       </div>
    </header>
</template>

<script>

</script>

<style scoped>


header{
    width: 100%;
    height: 87px;
    background-color:#fff;
    margin-top: 0; 
}
.container{
    width:25%;
    height: 100%;
    float: left;    
}
#search-box{
    position: relative;
    width: 180px;
    height: 38px;
    border: 1px solid #363636;
    padding: 0px 10px;
    border-radius: 50px;
    top: 15px;
    margin-left: 23%;
}
.elementscontainer{
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.search{
    border:none;
    height: 100%;
    width: 100%;
    padding: 0 5px;
    border-radius: 50px;
    font-size: 14px;
    color: black;
    font-weight: 100;
}
.search:focus{
    outline: none;
}
.material-icons{
    width: 22px;
    height: 20px;
}
.header-logo{
    width: 57%;
    height: 100%;
    float: left;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
#right-box{
    width: 18%;
    height: 100%;
    float: right;
}
section{
    margin-top: 20px;
    float: left;
    margin-left: 10px;
}
nav ul{
    list-style: none;
    margin: 0;
  padding: 0;
 
}
nav li{
    position:relative;
    width: 58px;
    background-color: #fff;
    z-index: 1;
}
.down{
    width: 12px;
    height:13px;
    margin-top: 9px;
    float: right;
}
nav ul li ul{
  position: absolute;
  left:-900em;
}
nav ul li:hover ul{
  left: 0;
}
nav ul li a{
  text-decoration: none;
  display: block;
  text-align: center;
}
nav ul li ul li a{
 
  padding-top: 2px;
  font-size: .8em;
}
nav  li ul  li a:hover{
  background:#7b232e;
}
</style>
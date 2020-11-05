<template>
<div class="slide">

        <a @click="prev" class="left"></a> 
      <img :src="images[Math.abs(currentNumber) % images.length]"/>
       <a @click="next" class="right"></a>
</div>
</template>
<script>
export default {
    name:'slide',
    data()
    {
        return{
            images: ['','https://www.coffeemania.com/epanel/upl/images/shop_top2.png', 'https://www.coffeemania.com/epanel/upl/images/shop_top.png'],
            currentNumber: 0
        }
    },
    ready: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(function(){this.currentNumber += 1;},300);
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }

}
}
</script>
<style scoped>
.slide{
    float: left;
    margin-left: 8%;
    width: 82.8%;
    height: 485px;
    position: relative;
    background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top.png");
    animation:image 15s infinite alternate;
}
.slide .left{
    z-index: 100;
    position: absolute;
    float: left;
    width: 50%;
    height: 100%;
    
}
.slide .right{
    z-index: 100;
    position: absolute;
    float: right;
    width: 50%;
     height: 100%;
    margin-left: 50%;
    
}
.slide img{
   display: block;
   background: transparent;
   position: absolute;
}
@keyframes image{
	0%{
		background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top.png");
        
	}
 
	25%{
		background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top2.png");
     
	}
 
	50%{
		background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top.png");
	}
 
	75%{
		background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top2.png");
	}
 
	100%{
		background: no-repeat url("https://www.coffeemania.com/epanel/upl/images/shop_top.png");
	}
}
</style>
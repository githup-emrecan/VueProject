<template>
    <header>
        <nav>
            <div class="menu-item"><nuxt-link :to="{ name: 'index' }">ANASAYFA</nuxt-link></div>
            <div class="menu-item"><a href="">HAKKIMIZDA</a></div>
            <drop title="SHOP" :items="shop" />
            <div class="menu-item"><nuxt-link :to="{ name: 'index' }">MENÜ</nuxt-link></div>
            <div class="menu-item"><a href="">FRANCHISE</a></div>
            <div class="menu-item"><a href="">HERYERDEYİZ</a></div>
            <div class="menu-item"><a href="">İLETİŞİM</a></div>
            <div class="menu-item"><a href="">BLOG COFFEMANIA</a></div>
             <drop title="GLOBAL" :items="global" />
        </nav>
    </header>
</template>
<script>
import Dropdown from './Dropdown.vue'
export default {
  name: 'navbar',
  components: {
    'drop': Dropdown
  },
  data () {
    return {
      shop: [
        {
          title: 'Kahve Grubu',
          link: 'ShopProducts'
        },
        {
          title: 'Aksesuar',
          link: '#'
        },
        {
          title: 'Hediye Kutuları',
          link: '#'
        }
      ],
      global: [
        {
          title: 'Azerbeycan',
          link: '#'
        },
        {
          title: 'Mısır',
          link: '#'
        },
        {
          title: 'Kıbrıs',
          link: '#'
        }
      ]
    }
  }
}
</script>
<style>
header{
    float: left;
    width: 100%;
    background:#7b232e;
    top:0;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;

}
nav{
    display: flex;
     align-items: center;
     justify-content: center;
}
header nav .menu-item {
  color: #FFF;
  padding: 13px 25px;
  position: relative;
  text-align: center;
  display: flex;
  font-size: 13px;
}
header nav .menu-item a.active,
header nav .menu-item a:hover {
  color: #9c9c9c;
}
nav .menu-item a {
  color: #FFF;
  text-decoration: none;
  font-weight: 300;
}
</style>

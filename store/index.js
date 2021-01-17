import {fireData} from '~/plugins/firebase.js'
import {fireAuth} from '~/plugins/firebase.js'

/*import  router  from '../store/router.js'*/

export const state = () => ({
  products: [],
  users: [],
  orders:[],
  cart:[],
  speacialcart:[],
  user: null,
  isAuthenticated: false,
  
})

export const getters = {
  isAuthenticated(state) {
    return state.user !== null && state.user !== undefined;
},
  products: (state) => {
    return state.products
 },
 productsInCart: (state) => {
     return state.cart
  },
  productsSpeacialCart: (state) => {
    return state.speacialcart
 },
  getusers:(state) => {
    return state.users
 },
  Getorders:(state) => {
    return state.orders
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  quantity: state => {
    return state.products.quantity;
  },

  filteredProducts (state, { filterCategory }) {
    return state.products.filter(product => {
      return product.category === filterCategory
    })
  },
  filteredisSlideProducts (state, { filterisSlide }) {
    return state.products.filter(product => {
      return product.isSlide === filterisSlide
    })
  },
filteredPriceProducts (state, { filterPrice }) {
    return state.products.filter(product => {
      return product.Price === filterPrice
    })
  },
  

}

export const mutations = {
  AAddToCart({state},array){
    if(state.cart.filter(c => c.pid == array.pid).length>0) {
     state.cart.find(c=>c.pid===array.pid).piece++;
      return;
    }
    var cart = state.cart;
    if(cart.length >0 ){
      var id = cart[cart.length-1].id+1;
    }
    else id=1;
    var pid = array.pid;
    var ProductName = array.ProductName;
    var Price = array.Price;
    var images = array.images;
    var piece = array.piece;
    var newCart = {id,pid,ProductName,Price,images,piece}

   state.cart.push(newCart)
    
  },
  ddeleteCart({state,dispatch},id){
    
    var key=state.cart.find(cart => cart.id === id).key
    state.cart.delete(cart.id)
  
  },


  SetProducts(state,array){
  state.products=array
  },
  SetUsers(state,array){
    state.users=array
    },
  SetCart(state,array){
      state.cart=array
      },
  SetSpeacialCart(state,array){
        state.speacialcart=array
    },
 setIsAuthenticated(state, payload) {
        state.isAuthenticated = payload;
    },
  setUser(state, payload) {
      state.user = payload;
  },
  SetOrders(state,array){
    state.orders=array
    },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
}

export const actions = {

  userLogin({ commit }, { email, password }) {
    fireAuth.signInWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);         
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
        });
},
userSignOut({ commit }) {
   fireAuth.signOut()
      .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
           router.push('/'); 
      }) 
      .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
         router.push('/'); 
      });
},
  AddToCart({ commit }, array) {
    commit('AddToCart', array)
  },
  AddToSpecialCart({ commit }, array) {
    commit('AddToSpecialCart', array)
  },

  AddTheOrder({state,dispatch},array){
    
    var name =array.name;
    var surname =array.surname;
    var tc =array.tc;
    var email =array.email;
    var tel = array.tel;
    var adres = array.adres;
    var pkod = array.pkod;
    var İl = array.il;
    var ilce = array.ilce;
    var ProductName='El Salvador (250 GR)';
    var Price =64.81;
    var imga ='https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png';
    var pid = 4;
    var piece = 1;
    var Total =array.calculateToplamPrice;
    var DeliveryDate = 'henüz teslim edilmedi';
    var OrderDate ='04.01.2021 Pazartesi';
    var ShipDate = 'bilinmiyor';
    var newOrder = {name,surname,tc,email,tel,adres,pkod,İl,ilce,ProductName,Price,imga,pid,Total,DeliveryDate,OrderDate,piece,ShipDate,}

    var ref = fireData.ref('orders').child(state.user.user.uid)
    ref.push(newOrder)
  },

  AddToCart({state,dispatch},array){
    if(state.cart.filter(c => c.pid == array.pid).length>0) {
     var ItemID = state.cart.find(c=>c.pid===array.pid).id
     dispatch('changePiece',{id:ItemID, piece:1})
      return;
    }
    var cart = state.cart;
    if(cart.length >0 ){
      var id = cart[cart.length-1].id+1;
    }
    else id=1;
    var pid = array.pid;
    var ProductName = array.ProductName;
    var Price = array.Price;
    var images = array.images;
    var piece = array.piece;
    var newCart = {id,pid,ProductName,Price,images,piece}

    var ref = fireData.ref('cart')
    ref.push(newCart)
    dispatch('fetchcart')
  },

  AddToSpecialCart({state,dispatch},array){
    if(state.speacialcart.filter(c => c.pid == array.pid).length>0) {
     var ItemID = state.speacialcart.find(c=>c.pid===array.pid).id
     dispatch('changeSpeacialPiece',{id:ItemID, piece:1})
      return;
    }
    var cart = state.cart;
    if(cart.length >0 ){
      var id = cart[cart.length-1].id+1;
    }
    else id=1;
    var pid = array.pid;
    var ProductName = array.ProductName;
    var Price = array.Price;
    var images = array.images;
    var piece = array.piece;
    var newCart = {id,pid,ProductName,Price,images,piece}

    var ref = fireData.ref('specialCart').child(state.user.user.uid)
    ref.push(newCart)
    dispatch('fetchSpeacialcart')
  },
 changePiece({state,dispatch},id_count){
    var ref = fireData.ref('cart')
    var id=id_count.id
    var item=state.cart.find(cart => cart.id === id)
    var nCount = id_count.piece + item.piece
    var key=item.key
    if (nCount<=0) {
    
    } else {
      ref.child(key).update({
        piece:nCount
      })
      dispatch('fetchcart')
    }
  },
  changeSpeacialPiece({state,dispatch},id_count){
    var ref = fireData.ref('specialCart/'+ state.user.user.uid)
    var id=id_count.id
    var item=state.speacialcart.find(cart => cart.id === id)
    var nCount = id_count.piece + item.piece
    var key=item.key
    if (nCount<=0) {
    
    } else {
      ref.child(key).update({
        piece:nCount
      })
      dispatch('fetchSpeacialcart')
    }
  },

  deleteCart({state,dispatch},id){
    var ref = fireData.ref('cart')
    var key=state.cart.find(cart => cart.id === id).key
    ref.child(key).remove()
    dispatch('fetchcart')
  },

  deletespeacialCart({state,dispatch},id){
    var ref = fireData.ref('specialCart/'+ state.user.user.uid)
    var key=state.speacialcart.find(cart => cart.id === id).key
    ref.child(key).remove()
    dispatch('fetchSpeacialcart')
  },

  fetchProducts ({commit}){
    var ref = fireData.ref('products')
    ref.once('value').then(function(snapshot)
    {
      let arr =[]
      if (snapshot.val()!=null) {    
        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('SetProducts', arr)
    });
  },

  fetchcart ({commit}){
    var ref = fireData.ref('cart')
    ref.once('value').then(function(snapshot)
    {
      let arr =[]
      if (snapshot.val()!=null) {    
        arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      }
      commit('SetCart', arr)
    });
  },
  
  fetchUsers ({state,commit}){
    var ref = fireData.ref('users/'+ state.user.user.uid)
    ref.once('value').then(function(snapshot)
    {
      let arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      commit('SetUsers',arr)
    });
  },
  fetchSpeacialcart ({state,commit}){
    var ref = fireData.ref('specialCart/'+ state.user.user.uid)
    ref.once('value').then(function(snapshot)
    {
      let arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      commit('SetSpeacialCart',arr)
    });
  },


  fetchOrders ({state,commit}){
    var ref = fireData.ref('orders/'+ state.user.user.uid)
    ref.once('value').then(function(snapshot)
    {
      let arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      commit('SetOrders',arr)
    });
  }

  
} 

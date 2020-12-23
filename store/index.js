import {fireData} from '~/plugins/firebase.js'




export const state = () => ({
  products: [],
  users: [],
  orders:[],
  cart:[],
  user: null,
  isAuthenticated: false,
  deneme:'VI9RGY15xHdCIc9FuTaQojZbvPJ3'
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
  getusers:(state) => {
    return state.users
 },
  gerorders:(state) => {
    return state.orders
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {


  SetProducts(state,array){
  state.products=array
  },
  SetUsers(state,array){
    state.users=array
    },
  SetCart(state,array){
      state.cart=array
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
    var ref = fireAuth.auth
    ref.signInWithEmailAndPassword(email, password)
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
   fireAuth.auth.signOut()
      .then(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
         /*  router.push('/'); */
      }) 
      .catch(() => {
          commit('setUser', null);
          commit('setIsAuthenticated', false);
        /*  router.push('/'); */
      });
},
  AddToCart({ commit }, array) {
    commit('AddToCart', array)
  },
  AddTheOrder({state,dispatch},array){
    var İlname = array.il;
    var ilcename = array.ilce;
    var newOrder = {İlname,ilcename}

    var ref = fireData.ref('orders')
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

  deleteCart({state,dispatch},id){
    var ref = fireData.ref('cart')
    var key=state.cart.find(cart => cart.id === id).key
    ref.child(key).remove()
    dispatch('fetchcart')
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
    var ref = fireData.ref('users')
    ref.once('value').then(function(snapshot)
    {
      let arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      commit('SetUsers',arr)
    });
  },
  fetchOrders ({state,commit}){
    var ref = fireData.ref('orders')
    ref.once('value').then(function(snapshot)
    {
      let arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
      commit('SetOrders',arr)
    });
  }

  
} 

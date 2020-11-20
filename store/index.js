export const state = () => ({
  products: [
    {
      id:1,
      ProductName:"Colombia (250 GR)",
      Price:64.81,
      isSlide:0,
      kdvPrice:"70.00",
      images: 'https://www.coffeemania.com/epanel/upl/1096/big_colombia_250gr.png' ,
      images2:'',
      isAddedToCart: false,
      isAddedBtn: false,
      quantity: 1
  },
  {
      id: 2,
      ProductName:"Mania Blend NEXT (250 GR)",
      Price:69.44,
      kdvPrice:"75.00",
      isSlide:0,
      images: 'https://www.coffeemania.com/epanel/upl/1084/big_mania_blend_next.png' ,
      images2:'',
      isAddedToCart: false,
      isAddedBtn: false,
      quantity: 1
  },
  {
    id:3,
      ProductName:"Ethiopia (250 GR)",
      Price:69.44,
      kdvPrice:"75.00",
      isSlide:0,
      images:'https://www.coffeemania.com/epanel/upl/1093/big_ethiopia_250gr.png',
      images2:'',
      isAddedToCart: false,
      isAddedBtn: false,
      quantity: 1
  },
  {
      id:4,
      ProductName:"Türk Kahvesi (100 GR)",
      Price:7.87,
      kdvPrice:"8.50",
      isSlide:1,
      images:'https://www.coffeemania.com/epanel/upl/1098/big_t_kahvesi.png',
      images2:'https://www.coffeemania.com/epanel/upl/1098/big_WhatsApp%20Image%202020-09-14%20at%2011.39.06.jpeg',
      isAddedToCart: false,
      isAddedBtn: false,
      quantity: 1
  },
  {
      id:5,
      ProductName:"El Salvador (250 GR)",
      Price:64.81,
      kdvPrice:"70.00",
      isSlide:0,
      images:'https://www.coffeemania.com/epanel/upl/1089/big_el_salvador_250gr.png',
      images2:'',
      isAddedToCart: false,
      isAddedBtn: false,
      quantity: 1
  }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */

import { createStore } from 'vuex'

export default createStore({
  // state is exactly the same to data function...is going to store the data
  state: {
    // user: "welcome brandon",
    // fruits : [
    //   {
    //     name: 'Apples',
    //     price: 30
    //   },
    //   {
    //     name: 'Bannana',
    //     price: 20
    //   },
    //   {
    //     name: 'Mango',
    //     price: 40
    //   }
    // ]
    counter: 0,
    dataArray:[]
  },

  // getters get or fetch information inside the state
  getters: {
    // user: (state) => {
    //   return state.user
    // }
    displayWelcome(state){
      return state.counter
    }
  },

  // mutations change data in the state
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    setData(state, info){
      state.dataArray = info //accessing data as info
    }
  },

  // actions is the exact same as mutations but mutations can commit and track its history, actions can change the state and cannot commit and track, you have to dispatch an action which will change the state
  actions: {
    // context is a keyword refered to storehttp://localhost:3000/data
    fetchData(context){
      fetch("http://localhost:3000/data")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        context.commit('setData', data)
      })
    }
  },
  modules: {
  }
})

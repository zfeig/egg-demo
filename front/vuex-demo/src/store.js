const  [INCREASE_COUNT,DECREASE_COUNT] = ['INCREASE_COUNT','DECREASE_COUNT'];
const store = {
  state: {
    count: 0
  },
  mutations: {
	[INCREASE_COUNT](state) {
	  state.count++;
	},
	[DECREASE_COUNT](state) {
	  state.count--;
	}
  },
  actions: {
    add({ commit }) {
      setTimeout(() => {
        commit(INCREASE_COUNT);
      },1000);
    },
    test({ commit }){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          commit(INCREASE_COUNT);
          resolve();
        },1000);
      });
    },
    decr({ commit }) {
      setTimeout(() => {
        commit(DECREASE_COUNT);
      },1000);
    }
  }
}
export default store
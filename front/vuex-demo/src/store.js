const  [INCREASE_COUNT,DECREASE_COUNT] = ['INCREASE_COUNT','DECREASE_COUNT'];
const store = {
  state: {
    count: 0,
    list: [
     {id:1,title:'for one more information forwards',time:'2018-02-12',desc:'desc for for one more information'},
     {id:2,title:'big cut off for new year activity',time:'2018-01-08',desc:'desc for off for new year activity'},
     {id:3,title:'summer holiday hotel tie discount',time:'2018-01-23',desc:'desc for holiday hotel tie discount'},
     {id:4,title:'disney family musemcamump shedule',time:'2018-03-12',desc:'desc for family musemcamump shedule'},
     {id:5,title:'holiood box hotter mive all start',time:'2018-02-12',desc:'desc for hotter mive all start'}
    ]
  },
  mutations: {
  	[INCREASE_COUNT](state) {
  	  state.count++;
  	},
  	[DECREASE_COUNT](state) {
  	  state.count--;
  	}
  },
  getters: {
  	double: state => state.count*2,
    getById: (state) => (id) =>{
       for (let one of state.list) {
         if (one.id == id) {
           return one;
         }
       }
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
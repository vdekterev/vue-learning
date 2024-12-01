import { defineStore } from 'pinia';


export const useNumbersStore = defineStore('numbers', {
	state: () => {
		return {
			numbers: [8,2,5,1,3,6,9,7,4]
		}
	},
	actions: {
		addNumber(num) {
			this.numbers.push(num);
		}
	},
	getters: {
		doubleNumber(state) {
			return state.numbers.map(n => n * 2);
		},
		filterNum(state) {
			return (minNum) => state.numbers.filter(num => num >= minNum)
		}
	}
})

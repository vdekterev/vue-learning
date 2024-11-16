import { createRouter, createWebHistory } from 'vue-router';

import QuizzesView from '@/views/QuizzesView.vue';
import QuizzView from '@/views/QuizzView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: QuizzesView
	},
	{
		path: '/quizzes',
		redirect: '/'
	},
	{
		path: '/quizzes/:slug/question/:question_id',
		name: 'quizz',
		component: QuizzView,
		// children: [
		// 	{
		// 		path: 'question/:question_id',
		// 		component: QuizzQuestionView
		// 	}
		// ]
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
})

export default router;

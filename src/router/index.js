import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import CarView from '@/views/CarView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue';


const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/home',
		redirect: '/'
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView
	},
	{
		path: '/cars/:id',
		name: 'car',
		component: CarView,
		children: [{
			path: 'contacts',
			component: ContactView
		}]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notfound',
		component: NotFoundView
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes
})

export default router;


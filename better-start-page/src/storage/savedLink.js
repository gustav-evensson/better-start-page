import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSavedLinks = defineStore(
	'savedLinks',
	() => {
		const links = ref([
			{
				url: 'https://dribbble.com/search/login-page',
				title: 'Dribbble',
			},
			{
				url: 'https://dribbble.com/search/login-page',
				title: 'Dribbble',
			},
			{
				url: 'https://dribbble.com/search/login-page',
				title: 'Dribbble',
			},
		]);
		const addLink = (newLink) => {
			links.value.push(newLink);
		};
		return { links, addLink };
	},
	{ persist: true }
);

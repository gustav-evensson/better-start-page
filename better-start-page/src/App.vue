<script setup>
import { ref } from 'vue';
import siteCard from './components/siteCard.vue';
import { useSavedLinks } from './storage/savedLink';

const savedLinks = useSavedLinks();
const googleInput = ref('')

const googleSearch = () => {
  const googleURL = `https://www.google.com/search?q=${googleInput.value}`
  window.location.href = googleURL
}

</script>

<template>
	<main>
		<form class="googleSearch" @submit.prevent="googleSearch()">
			<img src="./assets/google.svg" alt="google icon" class="googleIcon" />
			<input v-model="googleInput" type="text" class="search" placeholder="Google search..." />
			<button type="submit" class="searchBtn">
				<img src="./assets/search-normal.svg" alt="search icon" class="searchIcon" />
			</button>
		</form>
		<div class="favouriteSites">
			<site-card v-for="(site, idx) in savedLinks.links" :url="site.url" :title="site.title" :key="idx" />
			<button class="addLinkBtn"><span class="material-symbols-outlined"> add </span></button>
		</div>
		
	</main>
</template>

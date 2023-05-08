<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
	url: String,
    title: String
});
const siteData = reactive({
	imgSrc: `https://www.google.com/s2/favicons?sz=32&domain_url=${props.url}`,
	siteTitle: props.title,
	siteUrl: props.url,
});

onMounted(() => {
    console.log('Props URL: ', props.url);
});
</script>

<template>
	<a class="siteCard" :href="siteData.siteUrl" tabindex="0">
		<img height="32" width="32" :src="siteData.imgSrc" :alt="siteData.siteUrl + 'favicon'" />
		<div class="siteInfo">
			<p class="siteTitle">{{ siteData.siteTitle }}</p>
			<p class="siteUrl">{{ siteData.siteUrl }}</p>
		</div>
	</a>
</template>

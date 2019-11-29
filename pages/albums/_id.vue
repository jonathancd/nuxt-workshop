<template lang="html">
	<div class="container">
		
		<header>
			<nuxt-link to="/">Regresar</nuxt-link>

			<h1 class="title">{{album.title}}</h1>
		</header>

		
		<div v-if="photos.length == 0">
			<p>Cargando fotos...</p>
		</div>
	
		<div class="columns is-multiline">
			<div class="column is-one-quarter" v-for="photo in photos" :key="photo.id">
				<img :src="photo.url" :alt="album.title">
			</div>
		</div>


	</div>
</template>

<script>
	
	import axios from 'axios';
	import env from '../../config/env';
	import router from 'vue-router';

	export default {
		name: 'AlbumIndvPage',
		data() {
			return {
				 album: {},
				 photos: []
			}
		},
		created: async function(){

			let albumId = this.$route.params.id;

			let albumResponse = await axios.get(`${env.endpoint}/albums/${albumId}`);

			this.album = albumResponse.data;


			let photosResponse = await axios.get(`${env.endpoint}/albums/${albumId}/photos`);

			this.photos = photosResponse.data;

			console.log(this.photos)


			// created(){}
			// let albumId = this.$route.params.id;

			// axios.get(`${env.endpoint}/albums/${albumId}/`)
			// 	.then(response => {
			// 		this.album = response.data;
			// 	});

			// axios.get(`${env.endpoint}/albums/${albumId}/photos`)
			// 	.then(response => {
			// 		this.photos = response.data;
			// 	});
		}
	}
</script>


<style scoped>
	.container{
		text-align: center;
	}
</style>
<script>
	import { DateTime } from 'luxon';
import BlogCardcopy from './BlogCard copy.svelte';
	import BlogCard from './BlogCard.svelte';

	export let posts;
</script>

<section class="text-content-base body-font">
	<div class="container mt-10 px-5 py-16 mx-auto">
		<h2 class="sm:text-3xl text-2xl font-medium  title-font text-center  mb-10">Recent Posts</h2>
		<ul class="flex flex-wrap justify-center md:justify-start w-full px-4 sm:px-8">
			{#each posts as post}
			<BlogCard {post} />
			{/each}
		</ul>
	</div>
</section>

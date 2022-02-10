<script>
	import BlogCard from './BlogCard.svelte';

	export let posts;
</script>

<section class="text-content-base body-font">
	<div class="container mt-10 px-5 py-16 mx-auto">
		<h2 class="sm:text-3xl text-2xl font-medium  title-font text-center  mb-10">Recent Posts</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each posts as post}
				<BlogCard {post} />
			{/each}
		</div>
	</div>
</section>

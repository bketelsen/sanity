<script>
	import BlogCard from './BlogCard.svelte';

	export let posts;
</script>

<section class="text-content-base body-font">
	<div class="container mt-10 px-5 py-16 mx-auto">
		<h2 class="sm:text-3xl text-2xl font-medium  title-font text-center  mb-10">Recent Posts</h2>
		<div class="flex flex-wrap -m-3">
			{#each posts as post}
				<div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
					<BlogCard {post} />
				</div>
			{/each}
		</div>
	</div>
</section>

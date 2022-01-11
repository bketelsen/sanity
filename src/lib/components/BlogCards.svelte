<script>
	import BlogCard from './BlogCard.svelte';
	export let posts;
</script>

<div class="flex flex-wrap -m-4">
	{#each posts as post}
		<BlogCard {post} />
	{/each}
</div>

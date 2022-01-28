<script>
	import PostCard from '$lib/components/PostCard.svelte';

	export let posts = [];
</script>

<section>
	{#each posts as post (post.slug.current)}
		<PostCard {post} />
	{/each}
</section>

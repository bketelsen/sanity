<script>
	import TechCard from './TechCard.svelte';
	export let technologies;
</script>

<div class="flex flex-wrap -m-4">
	{#each technologies as tech}
		<TechCard {tech} />
	{/each}
</div>

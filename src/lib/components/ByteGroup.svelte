<script>
  import ByteCard from './ByteCard.svelte';

	export let bytes;
	console.log(bytes)
</script>

	<div class="flex flex-wrap -mx-4 -my-8">
		{#each bytes as byte}
		<ByteCard {byte} />
		{/each}
	</div>


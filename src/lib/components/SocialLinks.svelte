<script>
	export let author;
	import Icon from './Icon.svelte'
	console.log(author)
</script>

{#if author.twitter}
	<a href={author.twitter} class="ml-3 text-mix-200">
		<Icon kind="twitter" size={18}/>
	</a>
{/if}
{#if author.github}
	<a href={author.github} class="ml-3 text-mix-200">
		<Icon kind="github" size={18}/>
	</a>
{/if}
{#if author.youtube}
	<a href={author.youtube} class="ml-3 text-mix-200">
		<Icon kind="youtube" size={18}/>
	</a>
{/if}
{#if author.instagram}
	<a href={author.instagram} class="ml-3 text-mix-200">
		<Icon kind="instagram" size={18}/>
	</a>
{/if}
{#if author.linkedin}
	<a href={author.linkedin} class="ml-3 text-mix-200">
		<Icon kind="linkedin" size={18}/>
	</a>
{/if}
{#if author.twitch}
	<a href={author.twitch} class="ml-3 text-mix-200">
		<Icon kind="twitch" size={18}/>
	</a>
{/if}

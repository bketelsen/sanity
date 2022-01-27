<script>
	export let author;
	import Icon from './Icon.svelte';
</script>

{#if author.twitter}
	<a href={author.twitter} class="ml-3 text-mix-200">
		<Icon kind="twitter" size={18} title="twitter"/>
	</a>
{/if}
{#if author.github}
	<a aria-label="Github" href={author.github} class="ml-3 text-mix-200">
		<Icon kind="github" size={18} title="github"/>
	</a>
{/if}
{#if author.youtube}
	<a aria-label="youtube" href={author.youtube} class="ml-3 text-mix-200">
		<Icon kind="youtube" size={18} title="youtube"/>
	</a>
{/if}
{#if author.instagram}
	<a aria-label="instagram" href={author.instagram} class="ml-3 text-mix-200">
		<Icon kind="instagram" size={18} title="instagram" />
	</a>
{/if}
{#if author.linkedin}
	<a aria-label="linked in" href={author.linkedin} class="ml-3 text-mix-200">
		<Icon kind="linkedin" size={18} title="linked in"/>
	</a>
{/if}
{#if author.twitch}
	<a aria-label="twitch" href={author.twitch} class="ml-3 text-mix-200">
		<Icon kind="twitch" size={18} title="twitch"/>
	</a>
{/if}

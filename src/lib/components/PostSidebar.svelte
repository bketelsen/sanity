<script>
	export let post;
	import { DateTime } from 'luxon';
	import Icon from './Icon.svelte';

</script>

<aside class="pb-10">
	<div
		class="sticky top-0 flex flex-col items-start pt-4 border-t border-mix-700 xl:pl-4 sm:flex-row xl:border-l xl:border-t-0 xl:space-y-8 xl:block"
	>
		<div class="flex flex-wrap xl:block xl:space-y-8">
			<dl class="mt-4 mr-8 xl:mt-0 xl:mr-0">
				<dt class="label">Published on</dt>
				<dd class="text-mix-500 font-medium leading-6">
					<time dateTime={post.publishedAt}
						>{DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)}</time
					>
				</dd>
			</dl>
			{#if post.estimatedReadingTime > 0}
				<dl class="mt-4 md:mr-8 xl:mt-0 xl:mr-0">
					<dt class="label">Reading time</dt>
					<dd class="text-mix-500 font-medium leading-6">
						{post.estimatedReadingTime} Minute{post.estimatedReadingTime > 1 ? 's' : ''}
					</dd>
				</dl>
			{/if}

			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="label">Categories</dt>
				<dd class="text-mix-500 font-medium leading-6">
					{#each post.categories || [] as cat}
					<span
						class="category"
						>{cat.title}</span
					>
				{/each}
				</dd>
			</dl>

			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="label">Technologies</dt>
				<dd class="text-mix-500 font-medium leading-6">
					{#each post.technologies|| [] as tech}
					<span
						class="technology"
						>{tech.title}</span
					>
				{/each}
				</dd>
			</dl>
			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="label">Tags</dt>
				<dd class="text-mix-500 font-medium leading-6">
					{#each post.tags || [] as tag}
					<span
						class="tag"
						>#{tag.title}</span
					>
				{/each}
				</dd>
			</dl>
		</div>
	</div>
</aside>

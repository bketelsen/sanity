<script>

	export let tags, timeToRead;
	export let post;
	import { DateTime } from 'luxon';
	import Icon from './Icon.svelte';

</script>

<aside class="pb-10">
	<div
		class="sticky top-0 flex flex-col items-start pt-4 border-t border-mix-700 xl:pl-4 sm:flex-row xl:border-l xl:border-t-0 xl:space-y-8 xl:block"
	>
		{#each post.technologies as tech}
			<a sveltekit:prefetch href="/technology/{tech.slug.current}">
				<Icon
					kind={tech.iconName}
					title={tech.title}
					className="mx-5 mb-5 hover:border hover:border-black"
				/>
			</a>
		{/each}

		<div class="flex flex-wrap xl:block xl:space-y-8">
			<dl class="mt-4 mr-8 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-mix-600">Published on</dt>
				<dd class="text-mix-500 font-medium leading-6">
					<time dateTime={post.publishedAt}
						>{DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)}</time
					>
				</dd>
			</dl>
			{#if timeToRead > 0}
				<dl class="mt-4 md:mr-8 xl:mt-0 xl:mr-0">
					<dt class="font-semibold text-mix-600">Reading time</dt>
					<dd class="text-mix-500 font-medium leading-6">
						{timeToRead} Minute
						{timeToRead > 1 ? 's' : ''}
					</dd>
				</dl>
			{/if}

			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-mix-600">Categories</dt>
				<dd class="text-mix-500 font-medium leading-6">
					{#each post.categories || [] as cat}
					<span
						class="tracking-widest text-xs title-font font-medium text-green-700 mb-1 mr-3 uppercase"
						>{cat.title}</span
					>
				{/each}
				</dd>
			</dl>
			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-mix-600">Tags</dt>
				<dd class="text-mix-500 font-medium leading-6">
					{#each post.tags || [] as tag}
					<span
						class="tracking-widest text-xs title-font font-medium text-indigo-700 mb-3 mr-3 uppercase"
						>#{tag.title}</span
					>
				{/each}
				</dd>
			</dl>
			<dl class="w-full mt-4 lg:mr-8 sm:mt-2 xl:space-y-2 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-mix-600">Social Corner</dt>
				<dd class="mt-2 text-mix-500 font-medium leading-6 xl:mt-0">SHARE</dd>
			</dl>
		</div>
	</div>
</aside>

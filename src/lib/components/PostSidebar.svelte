<script>
	import Tags from './Tags.svelte';
	export let  tags, timeToRead;
	export let post;
	import { DateTime } from 'luxon';
	import Icon from './Icon.svelte';
	console.log(post.technologies)
</script>

<aside class="pb-10">
	<div
		class="sticky top-0 flex flex-col items-start pt-4 border-t border-gray-200 dark:border-gray-800 xl:pl-4 sm:flex-row xl:border-l xl:border-t-0 xl:space-y-8 xl:block"
	>
	{#each post.technologies as tech}
	<a href="/technology/{tech.slug.current}">
		<Icon kind={tech.iconName} title={tech.title} className="mx-5 mb-5"/>
	</a>
	{/each}

		<div class="flex flex-wrap xl:block xl:space-y-8">
			<dl class="mt-4 mr-8 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-white">Published on</dt>
				<dd class="text-white font-medium leading-6 text-time dark:text-gray-400">
					<time dateTime={post.publishedAt}
						>{DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)}</time
					>
				</dd>
			</dl>
			{#if timeToRead > 0}
				<dl class="mt-4 md:mr-8 xl:mt-0 xl:mr-0">
					<dt class="font-semibold text-white">Reading time</dt>
					<dd class="text-white font-medium leading-6 text-time dark:text-gray-400">
						{timeToRead} Minute
						{timeToRead > 1 ? 's' : ''}
					</dd>
				</dl>
			{/if}
			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-white">Tags</dt>
				<dd class="text-white font-medium leading-6 text-time dark:text-gray-400">
					<Tags {tags} />
				</dd>
			</dl>
			<dl class="w-full mt-4 lg:mr-8 sm:mt-2 xl:space-y-2 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-white">Social Corner</dt>
				<dd class="mt-2 text-white font-medium leading-6 xl:mt-0 text-time dark:text-gray-400">
					SHARE
				</dd>
			</dl>
			<dl class="w-full mt-4 lg:mr-8 sm:mt-2 xl:space-y-2 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-white">Support Corner</dt>
				<dd class="mt-2 text-white font-medium leading-6 xl:mt-0 text-time dark:text-gray-400">
					BuyMeACoffee
				</dd>
			</dl>
		</div>
	</div>
</aside>

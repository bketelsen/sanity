<script>
	import Tags from './Tags.svelte';
	export let tags, timeToRead;
	export let post;
	import { DateTime } from 'luxon';
	import Icon from './Icon.svelte';
	console.log(post.technologies);
</script>

<aside class="pb-10">
	<div
		class="sticky top-0 flex flex-col items-start pt-4 border-t border-gray-200 xl:pl-4 sm:flex-row xl:border-l xl:border-t-0 xl:space-y-8 xl:block"
	>
		{#each post.technologies as tech}
			<a sveltekit:prefetch href="/technology/{tech.slug.current}">
				<Icon
					kind={tech.iconName}
					title={tech.title}
					className="mx-5 mb-5 hover:border hover:border-white"
				/>
			</a>
		{/each}

		<div class="flex flex-wrap xl:block xl:space-y-8">
			<dl class="mt-4 mr-8 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-amber-400">Published on</dt>
				<dd class="text-blue-400 font-medium leading-6">
					<time dateTime={post.publishedAt}
						>{DateTime.fromISO(post.publishedAt).toLocaleString(DateTime.DATE_FULL)}</time
					>
				</dd>
			</dl>
			{#if timeToRead > 0}
				<dl class="mt-4 md:mr-8 xl:mt-0 xl:mr-0">
					<dt class="font-semibold text-white">Reading time</dt>
					<dd class="text-blue-400 font-medium leading-6">
						{timeToRead} Minute
						{timeToRead > 1 ? 's' : ''}
					</dd>
				</dl>
			{/if}
			<dl class="w-full mt-4 md:mr-8 md:w-auto xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-amber-400">Tags</dt>
				<dd class="text-blue-400 font-medium leading-6">
					<Tags {tags} />
				</dd>
			</dl>
			<dl class="w-full mt-4 lg:mr-8 sm:mt-2 xl:space-y-2 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-amber-400">Social Corner</dt>
				<dd class="mt-2 text-blue-400 font-medium leading-6 xl:mt-0">SHARE</dd>
			</dl>
			<dl class="w-full mt-4 lg:mr-8 sm:mt-2 xl:space-y-2 xl:mt-0 xl:mr-0">
				<dt class="font-semibold text-amber-400">Support Corner</dt>
				<dd class="mt-2 text-blue-400 font-medium leading-6 xl:mt-0">BuyMeACoffee</dd>
			</dl>
		</div>
	</div>
</aside>

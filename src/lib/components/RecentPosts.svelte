<script>
	import { DateTime } from 'luxon';

	export let posts;
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-16 mx-auto">
		<h2 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
			Recent Posts
		</h2>
		<div class="flex flex-wrap -m-4">
			{#each posts as post}
				<div class="p-4 lg:w-1/3">
					<div
						class="h-full bg-azure-100 hover:shadow-2xl bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
					>
						<h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							{#each post.categories || [] as cat}
								<span class="category"><a href="/category/{cat.slug.current}">{cat.title}</a></span>
							{/each}
						</h2>
						<h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
							{post.title}
						</h1>
						<p class="leading-relaxed mb-3">
							{post.excerpt}
						</p>
						<a href="/blog/{post.slug}" class="text-blue-700 inline-flex items-center"
							>Read Post
							<svg
								class="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14" />
								<path d="M12 5l7 7-7 7" />
							</svg>
						</a>
						<div
							class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"
						>
							<span
								class="text-gray-700 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
								><time dateTime={post.date}
									>{DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_FULL)}</time
								></span
							>
							<span class="text-gray-700 inline-flex items-center leading-none text-sm">
								{post.estimatedReadingTime} min read
							</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

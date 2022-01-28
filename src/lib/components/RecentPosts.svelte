<script>
  import { DateTime } from 'luxon';

	export let posts;

</script>

<section class="mt-20 text-gray-900">
	<div class="grid grid-cols-1">
		<h2 class="text-3xl font-mono font-black mb-2 pb-1">Recent posts</h2>
		<p class="text-xl opacity-80 mb-0">
			Ab placeat inventore labore, illo vel quas modi officiis consectetur reiciendis. Pariatur
			consectetur omnis cumque dolorem debitis.
		</p>
	</div>

	<hr class="my-12" />

	<div class="grid lg:grid-cols-3 gap-4">
		{#each posts as post}
			<div class="mb-12">
				<div>
					<div class="pb-4">
						<p class="pb-1 mb-4">
							{#each post.categories || [] as cat}
								<span class="category"><a href="/category/{cat.slug.current}">{cat.title}</a></span>
							{/each}
						</p>
						<h5 class="text-xl font-semibold mb-4"><a href="/blog/{post.slug}">{post.title}</a></h5>
						<p class="text-gray-700 mb-4">
							{post.excerpt}
						</p>
					</div>
					<div class="flex flex-row items-center">
						<div >
							<p class="text-xs opacity-80">					<time dateTime={post.date}
						>{DateTime.fromISO(post.date).toLocaleString(DateTime.DATE_FULL)}</time
					> • {post.estimatedReadingTime} min read</p>
						</div>
					</div>
				</div>
			</div>
		{/each}

	</div>
</section>

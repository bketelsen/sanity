<script context="module">
	export const prerender = true;

	export async function load({ params, fetch }) {
		try {
			const url = `/category/${params.slug}.json`;
			const res = await fetch(url);
			const data = await res.json();

			if (data?.cat) {
				return {
					props: data
				};
			}
		} catch (err) {
			return {
				status: 500,
				error: new Error(`Could not load url`)
			};
		}
	}
</script>

<script>
	import SEO from '$lib/components/SEO.svelte';
	import { globalStore } from '$lib/stores/global';

	export let cat;
	console.log(cat);
</script>

<SEO global={$globalStore} />

<main class="container max-w-3xl mx-auto xl:max-w-5xl px-4 xl:px-0">
	<article class="relative flex flex-col md:px-4 xl:grid xl:grid-cols-4 xl:col-gap-6">
		<div class="pb-4 md:mr-8 xl:pb-0 xl:mb-8 xl:col-span-3 mt-4 xl:mt-10">
			<h2 class="text-3xl xl:text-4xl font-bold mb-4 text-cerise-600 leading-snug xl:leading-snug">
				{cat.title}
			</h2>
		</div>
		<div
			class="order-1 space-y-16 md:mr-8 xl:order-none xl:col-span-3 prose text-mix-700 lg:prose-lg "
		>
			<p class="leading-relaxed mb-3">
				{cat.description}
			</p>

			<hr class="border-mix-700 " />
			<div class="pb-4 md:mr-8 xl:pb-0 xl:mb-8 xl:col-span-3 mt-4 xl:mt-10">
				<h3 class="text-xl xl:text-2xl font-bold mb-4 text-mix-600 leading-snug xl:leading-snug">
					Posts
				</h3>
				<div>
					{#each cat.relatedPosts as post}
						<p class="leading-relaxed mb-3">
							<a
								href="/blog/{post.slug.current}"
								class="ml-4 block font-medium leading-5  focus:outline-none  transition duration-150 ease-in-out"
							>
								{post.title}
							</a>
						</p>
					{/each}
				</div>
			</div>
		</div>
	</article>
</main>

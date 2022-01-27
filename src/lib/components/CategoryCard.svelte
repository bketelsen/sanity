<script>
	export let cat;
	import Icon from './Icon.svelte';
</script>

<div class="p-4 md:w-1/3">
	<div
		class="h-full rounded-lg cursor-pointer bg-light-100 border border-light-300 hover:shadow-xl hover:shadow-mix-500/70 overflow-hidden"
	>
		<Icon
			kind={cat.iconName}
			title={cat.title}
			className="lg:h-48 md:h-36 w-full object-contain object-center"
		/>

		<div class="p-6">
			<h1 class="title-font text-lg font-medium text-cerise-600 mb-3">{cat.title}</h1>
			<p class="leading-relaxed mb-3">
				{cat.description}
			</p>

			<div class="flex items-center flex-wrap ">
				<a
					sveltekit:prefetch
					href={`/category/${cat.slug.current}`}
					class="text-mix-700 inline-flex items-center md:mb-2 lg:mb-0"
					>Explore
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
			</div>
		</div>
	</div>
</div>

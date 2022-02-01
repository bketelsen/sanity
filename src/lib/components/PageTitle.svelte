<script>
	export let subtitle;
	export let title;
	export let herotext;
</script>

<section class="mb-15">
	<div class="container mx-auto py-5 px-3">
		<div class="grid grid-cols-1 gap-4">
			<div class="text-center">
				<h5 class="text-md font-bold uppercase text-secondary mb-3">{subtitle}</h5>
				<h2 class="text-3xl text-base-content font-bold mb-6">{title}</h2>
				<p class="text-xl  mb-12 md:mx-12 lg:mx-24 xl:mx-96 text-base-content">{herotext}</p>
			</div>
		</div>
	</div>
</section>

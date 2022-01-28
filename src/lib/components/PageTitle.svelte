<script>
	export let subtitle;
	export let title;
	export let herotext;
</script>

<section class="mb-15">
	<div class="container mx-auto py-5 px-3">
		<div class="grid grid-cols-1 gap-4">
			<div class="text-center text-gray-900">
				<h5 class="text-xl font-bold uppercase text-azure-600 mb-6">{subtitle}</h5>
				<h2 class="text-3xl font-bold mb-10">{title}</h2>
				<p class="text-xl  mb-12 md:mx-12 lg:mx-24 xl:mx-96">{herotext}</p>
			</div>
		</div>
	</div>
</section>

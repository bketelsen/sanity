<script>
	export let byte;
    console.log(byte)
	import { DateTime } from 'luxon';

</script>

<div class="py-8 px-4 lg:w-1/3">
	<div class="h-full flex items-start">
		<div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
			<span class=" pb-2 mb-2 border-b-2 border-secondary uppercase">{DateTime.fromISO(byte.date).toFormat('MMM')}</span>
			<span class="font-medium text-lg leading-none  title-font">{DateTime.fromISO(byte.date).toFormat('dd')}</span>
		</div>
		<div class="flex-grow pl-6">
			<h2 class="tracking-widest text-xs title-font font-medium text-primary mb-1">QUICK BYTE</h2>
			<h1 class="title-font text-xl font-medium text-content-base mb-3">{byte.title}</h1>
			<p class="leading-relaxed mb-5">
				{byte.description}
			</p>
			<a href={byte.href} class="inline-flex items-center">

				<button class="mt-5 btn btn-outline btn-primary">Read More</button>

			</a>
		</div>
	</div>
</div>

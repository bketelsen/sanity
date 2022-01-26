<script>
	import SocialLinks from './SocialLinks.svelte';
	export let global;
</script>

<footer class="text-light-200 bg-mix-600 body-font">
	<div class="border-t border-mix-800">
		<div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
			<div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
				<div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
					<label for="footer-field" class="leading-7 text-lg text-light-200">Get Updates in Your Inbox</label>
					<input
						type="text"
						id="footer-field"
						name="footer-field"
						class="w-full bg-light-50 bg-opacity-40 rounded border border-mix-700 focus:ring-2 focus:ring-mix-900 focus:bg-light-200 focus:border-mix-500 text-base outline-none text-mix-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<button
					class="inline-flex text-light-200 bg-mix-700 border-0 py-2 px-6 focus:outline-none hover:bg-mix-800 rounded"
					>Subscribe</button
				>
				<p class="text-light-200 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">
					No spam or sales, just
					<br class="lg:block hidden" />quality articles and news.
				</p>
			</div>
			<span
				class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto"
			>
				<SocialLinks author={global.author} />
			</span>
		</div>
	</div>
	<div class="bg-mix-600 bg-opacity-75">
		<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
			<p class="text-light-200 text-sm text-center sm:text-left">
				© 2022 {global.siteName} &rarr;
				<a
					href={global.author.twitter}
					class="text-light-200 ml-1"
					target="_blank"
					rel="noopener noreferrer">@bketelsen</a
				>
			</p>
			<span
				class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-light-400 text-sm"
				>Enamel pin tousled raclette tacos irony</span
			>
		</div>
	</div>
</footer>

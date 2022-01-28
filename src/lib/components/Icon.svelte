<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import Apple from 'svelte-icons-pack/fa/FaBrandsApple';
	import Windows from 'svelte-icons-pack/fa/FaBrandsWindows';
	import Twitter from 'svelte-icons-pack/fa/FaBrandsTwitter';
	import LinkedIn from 'svelte-icons-pack/fa/FaBrandsLinkedin';
	import Twitch	from 'svelte-icons-pack/fa/FaBrandsTwitch';
	import Github from 'svelte-icons-pack/fa/FaBrandsGithub';
	import Youtube from 'svelte-icons-pack/fa/FaBrandsYoutube';
	import Book from 'svelte-icons-pack/fa/FaSolidBook';
	import Cog from 'svelte-icons-pack/fa/FaSolidCog';

	export let kind;
	export let size = 64;
	export let color = 'currentColor';
	export let className = '';
	export let title;

	var icon;
	switch (kind) {
		case 'apple':
			icon = Apple;
			break;
		case 'windows':
			icon = Windows;
			break;
		case 'twitter':
			icon = Twitter;
			break;
		case 'linkedin':
			icon = LinkedIn;
			break;
		case 'twitch':
			icon = Twitch;
			break;
		case 'github':
			icon = Github;
			break;
		case 'youtube':
			icon = Youtube;
			break;
		case 'book':
			icon = Book;
			break;
		default:
			icon = Cog;
	}
</script>
<button aria-label={title}>
<Icon src={icon} {size} {color} {className} {title} />
</button>

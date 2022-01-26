<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import Apple from 'svelte-icons-pack/fa/FaBrandsApple';
	import Windows from 'svelte-icons-pack/fa/FaBrandsWindows';
	import Cog from 'svelte-icons-pack/fa/FaSolidCog';

	export let kind;
	export let size = 64;
	export let color = 'gray';
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
		default:
			icon = Cog;
	}
</script>

<Icon src={icon} {size} {color} {className} {title} />

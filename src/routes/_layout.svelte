<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<style type="text/scss">
	@import "../styles/base.scss";
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="root">
	<Nav {segment}/>
	<main>
		<slot></slot>
	</main>
</div>

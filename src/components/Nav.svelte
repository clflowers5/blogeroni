<script>
	export let segment;
</script>

<style type="text/scss">
	@import "../styles/base.scss";

	nav {
		border-bottom: 1px solid $color-tertiary;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: $color-secondary;
		display: block;
		bottom: -1px;
	}
</style>

<nav>
	<ul>
		<li><a class="secondary" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a class="secondary" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a class="secondary" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
	</ul>
</nav>

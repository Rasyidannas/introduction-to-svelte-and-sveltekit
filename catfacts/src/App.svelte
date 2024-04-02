<script>
	import Settings from "./Settings.svelte";
	import Feed from "./Feed.svelte";
</script>

<main>
	<div id="container">
		<div id="settings">
			<Settings />
		</div>

		<div id="feed">
			<Feed />
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		margin: 0 auto;
		padding: 1em;
	}

	#container {
		border: 1px solid black;
		padding: 10px;
		min-height: 500px;
		display: flex;
	}

	#settings {
		float: center;
		border: 1px solid grey;
		border-radius: 10px;
		padding: 5px;
	}

	#feed {
		margin: 0 auto;
	}
</style>
<script>
	let name = 'world';
	let innerWidth
</script>

<h1>Hello {name}!</h1>
<p>{innerWidth}</p>
<svelte:window on:click={() => console.log('window clicked')} bind:innerWidth />
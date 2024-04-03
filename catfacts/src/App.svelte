<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>
<svelte:body on:mousemove={(e) => console.log("mouse is at", e.clientX, e.clientY)} />
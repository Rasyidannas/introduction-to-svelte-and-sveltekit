<script>
	import Child from "./Child.svelte";
	let name = 'world';
</script>

<h1 class="text-light bg-dark">Hello {name}!</h1>
<Child>
	<span>Example 1</span>
	<svelte:fragment slot="ex2">
		<span>Example 2 span 1</span>
		<span>Example 2 span 2</span>
	</svelte:fragment>
	<span>Example 3</span>
</Child>
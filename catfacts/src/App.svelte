<script>
	import Child from "./Child.svelte";
	let name = 'world';
</script>

<h1 class="text-light bg-dark">Hello {name}!</h1>
<Child>
	<p>Example 1</p>
	<p slot="ex2">Example 2</p>
	<p>Example 3</p>
</Child>
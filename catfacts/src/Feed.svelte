<script>
    import feedStore from "./feedStore.js";
    import Fact from "./Fact.svelte";

    let factArray = [];

    $: {
        factArray.pop()

        //this will added the amount of facts to the array when range input is increased
        while($feedStore.amount > factArray.length) {
            factArray.unshift(`That is fact!`);
        }

        factArray = [...factArray]
    }
</script>

<h2>Recent {$feedStore.amount} Facts</h2>
<ol>
    {#each factArray as fact }
        <li>
            <Fact fact={fact}/>
        </li>
    {/each}
</ol>
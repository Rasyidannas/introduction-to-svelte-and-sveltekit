<script>
    import feedStore from "./feedStore.js";
    import Fact from "./Fact.svelte";

    let factArray = [];

    $: {
        updateFacts($feedStore.amount);
    }

    const getRandomFact = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        return data.fact;
    }

    const updateFacts = async (amount) => {
        if(amount < factArray.length) {
            factArray.pop()
        }

        //this will added the amount of facts to the array when range input is increased
        while(amount > factArray.length) {
            factArray.unshift(await getRandomFact());
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
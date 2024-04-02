<script>
    import feedStore from "./feedStore.js";
    import Fact from "./Fact.svelte";

    let factArray = [];
    let currentID

    $: {
        if(currentID) {
            clearInterval(currentID)
            console.log('ID cleared...')
        }

        currentID = setInterval(() => {
            updateFacts($feedStore.amount);
        }, $feedStore.refresh * 1000)
    }

    const getRandomFact = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        return data.fact;
    }

    const updateFacts = async (amount) => {
        factArray.pop()

        //this will added the amount of facts to the array when range input is increased
        while(amount > factArray.length) {
            factArray.unshift(await getRandomFact());
        }

        factArray = [...factArray]
        console.log('refreshed')
    }
</script>

<h2>Recent {$feedStore.amount} Facts</h2>
<h5>Refresh Rate: {$feedStore.refresh}</h5>

<ol>
    {#each factArray as fact }
        <li>
            <Fact fact={fact}/>
        </li>
    {/each}
</ol>
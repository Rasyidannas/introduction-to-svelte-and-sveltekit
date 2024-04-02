<script>
    import feedStore from "./feedStore.js";
    import Fact from "./Fact.svelte";

    let factArray = [];
    let currentID

    $: {

        if(!$feedStore.stop) {
            if(currentID) {
                clearInterval(currentID)
            }
    
            currentID = setInterval(() => {
                updateFacts($feedStore.amount);
            }, $feedStore.refresh * 1000)
        } else {
            clearInterval(currentID)
            currentID = null
        }
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
<h5>Stop: {$feedStore.stop}</h5>

{#if factArray.length === 0}
    <p>The facts are now loading and wil be sparking you joy soon...</p>
{:else}
    <ol>
        {#each factArray as fact }
            <li>
                <Fact fact={fact}/>
            </li>
        {/each}
    </ol>
{/if}

<script>
    import feedStore from "./feedStore";
    let amount = $feedStore.amount;
    let refresh = $feedStore.refresh;
    let stop = $feedStore.stop;
    $: feedStore.update(currentSettings => {
        currentSettings.amount = amount;
        currentSettings.refresh = refresh;
        currentSettings.stop = stop
        return currentSettings;
    });
</script>

<h3>Feed Settings</h3>
<label for="amount">Amount: {amount}</label>
<input type="range" id="amount" min="3" max="10" bind:value={amount} />
<label for="refresh">Refresh Rate: {refresh}</label>
<input type="range" id="refresh" min="6" max="12" bind:value={refresh} />
<br />
<button on:click={() => stop=!stop}>{stop ? "Start" : "Stop"}</button>
<script>
    import feedStore from "./feedStore";
    let amount = $feedStore.amount;
    $: feedStore.update(currentSettings => {
        currentSettings.amount = amount;
        return currentSettings;
    });
</script>

<h3>Feed Settings</h3>
<label for="amount">Amount: {amount}</label>
<input type="range" id="amount" min="3" max="10" bind:value={amount} />
<script>
   // this is for send data to another component
   import { createEventDispatcher } from 'svelte'
   const dispatch = createEventDispatcher()

   // this is for declare props
   export let text
   export let title

   // reactiviy has reactive value / when value change it will re-render
   $: extendText = text + '!!!'

   const changeText= () => {
      dispatch('addMsg', text)
      text = "Button Clicked"
   }
</script>

<input bind:value={text}/>
<button {title} on:click={changeText}>{extendText}</button>

<style>
   button{
      color: blue;
   }   
</style>
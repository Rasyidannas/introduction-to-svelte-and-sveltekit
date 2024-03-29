<script>
   import { getContext } from 'svelte'
   import msgStore from "../store/msgStore.js";

   // reactiviy has reactive value / when value change it will re-render
   $: text = ($msgStore.length + 1) + 'th message'
   $: inputText = text

   const changeText= () => {
      //this will for update the store
      msgStore.update(currentmsg => {
         return [...currentmsg, inputText]
      })
   }

   //this for get the context API
   let exclam = getContext('exclamation')
</script>

<input bind:value={inputText}/>
<button on:click={changeText}>Add "{text}"{exclam}</button>

<style>
   button{
      color: blue;
   }   
</style>
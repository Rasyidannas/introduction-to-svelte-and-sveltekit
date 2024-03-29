import {writable} from 'svelte/store'
const msgStore = writable(['msg1', 'msg2', 'msg3', 'msg4', 'msg5', 'msg6'])

export default msgStore
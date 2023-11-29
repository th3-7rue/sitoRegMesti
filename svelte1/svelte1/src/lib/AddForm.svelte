<script>
  import { todos } from "./store";
  let nuovoTodo;
  function AddTodo() {
    todos.update((old) => {
      old.push({ title: nuovoTodo, done: false });
      return old;
    });
  }
</script>

<input
  type="text"
  placeholder="Scrivi qui"
  class="input input-bordered w-full max-w-xs"
  bind:value={nuovoTodo}
/>
<button on:click={AddTodo} class="btn btn-secondary">Add</button>

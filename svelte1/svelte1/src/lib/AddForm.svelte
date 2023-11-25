<script>
  import { todos } from "./store";
  let nuovoTodo;
  function AddTodo() {
    todos.update((old) => {
      old.push({ title: nuovoTodo, done: false });
    });
    return old;
  }
</script>

<input type="text" bind:value={nuovoTodo} />
<button on:click={AddTodo}>Add</button>

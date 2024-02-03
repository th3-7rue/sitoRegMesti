<script>
  let title = "Pomodoro";
  //import TaskList from './TaskList.svelte';
  import Timer from "./lib/Timer.svelte";
</script>

<main class="bg-rosso-scuro">
  <div class="">
    <h1 class="text-9xl text-verde text-center">{title}</h1>
    <Timer />
    <!--   <TaskList />
 -->
  </div>
</main>

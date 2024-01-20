<script>
  import { onMount, onDestroy, writable } from 'svelte';

  let minutes = writable(25);
  let seconds = writable(0);
  let isRunning = writable(false);

  let interval;

  const start = () => {
    isRunning.set(true);
    interval = setInterval(() => {
      if (minutes.get() === 0 && seconds.get() === 0) {
        clearInterval(interval);
        isRunning.set(false);
        // Puoi aggiungere logica qui quando il timer raggiunge zero
      } else {
        if (seconds.get() === 0) {
          minutes.update(m => m - 1);
          seconds.set(59);
        } else {
          seconds.update(s => s - 1);
        }
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval);
    isRunning.set(false);
  };

  const reset = () => {
    clearInterval(interval);
    isRunning.set(false);
    minutes.set(25);
    seconds.set(0);
  };

  onMount(() => {
    // Non è necessario esportare nulla in questo caso
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<main>
  <div>
    <p>{$minutes}:{String($seconds).padStart(2, '0')}</p>
  </div>
</main>

<style>
  main {
    text-align: center;
    margin-top: 50px;
  }

  div {
    font-size: 3em;
    margin-bottom: 20px;
  }
</style>

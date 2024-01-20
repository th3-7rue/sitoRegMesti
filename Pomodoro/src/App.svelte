<script>
  import Timer from "./lib/Timer.svelte";

  let timerInstance;

  const startTimer = () => {
    timerInstance.start();
  };

  const stopTimer = () => {
    timerInstance.stop();
  };

  const resetTimer = () => {
    timerInstance.reset();
  };
</script>

<main>
  <h1>Pomodoro Timer</h1>
  <Timer bind:this={timerInstance} />
  <button
    on:click={startTimer}
    disabled={timerInstance && timerInstance.isRunning}>Start</button
  >
  <button
    on:click={stopTimer}
    disabled={!timerInstance || !timerInstance.isRunning}>Stop</button
  >
  <button on:click={resetTimer} disabled={!timerInstance}>Reset</button>
</main>

<style>
  main {
    text-align: center;
    margin-top: 50px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  button {
    font-size: 1.5em;
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

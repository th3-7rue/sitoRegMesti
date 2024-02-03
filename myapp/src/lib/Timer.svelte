<script>
  import pomodoroHalf from "../assets/PomodoroHalf.png";
  import pomodoroPieno from "../assets/PomodoroPieno.png";
  import start from "../assets/start.svg";
  import pause from "../assets/pause.svg";
  import stop from "../assets/stop.svg";
  var srcStartPause = start;
  const minutesToSeconds = (minutes) => minutes * 60;
  const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
  const padWithZeroes = (number) => number.toString().padStart(2, "0");
  const State = { idle: "idle", inProgress: "in progress", resting: "resting" };

  const POMODORO_S = minutesToSeconds(25);
  const LONG_BREAK_S = minutesToSeconds(20);
  const SHORT_BREAK_S = minutesToSeconds(5);

  let currentState = State.idle;
  let pomodoroTime = POMODORO_S;
  let completedPomodoros = 0;
  let interval;

  function formatTime(timeInSeconds) {
    const minutes = secondsToMinutes(timeInSeconds);
    const remainingSeconds = timeInSeconds % 60;
    return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
  }

  function startPomodoro() {
    srcStartPause = pause;
    currentState = State.inProgress;
    interval = setInterval(() => {
      if (pomodoroTime === 0) {
        completePomodoro();
      }
      pomodoroTime -= 1;
    }, 1000);
  }

  function completePomodoro() {
    clearInterval(interval);
    completedPomodoros++;
    if (completedPomodoros === 4) {
      rest(LONG_BREAK_S);
      completedPomodoros = 0;
    } else {
      rest(SHORT_BREAK_S);
    }
    srcStartPause = start;
  }

  function rest(time) {
    currentState = State.resting;
    pomodoroTime = time;
    interval = setInterval(() => {
      if (pomodoroTime === 0) {
        idle();
      }
      pomodoroTime -= 1;
    }, 1000);
  }

  function cancelPomodoro() {
    // TODO: Add some logic to prompt the user to write down
    // the cause of the interruption.
    idle();
  }

  function idle() {
    currentState = State.idle;
    clearInterval(interval);
    pomodoroTime = POMODORO_S;
  }
  // se tempo è a metà mostra pomodoro half
</script>

<section class="container mx-auto flex flex-col justify-center">
  {#if pomodoroTime < POMODORO_S / 2}
    <img class="w-10 h-10" src={pomodoroHalf} alt="Pomodoro a metà" />
  {:else}
    <img class="w-24 h-24" src={pomodoroPieno} alt="Pomodoro pieno" />
  {/if}

  <p class="text-verde text-9xl">
    {formatTime(pomodoroTime)}
  </p>
  <button
    class="text-verde"
    on:click={startPomodoro}
    disabled={currentState !== State.idle}
  >
    <img class="h-10" src={srcStartPause} alt="" />
  </button>
  <button
    class="text-verde"
    on:click={cancelPomodoro}
    disabled={currentState !== State.inProgress}
  >
    <img class="h-10" src={stop} alt="" />
  </button>
  <!--button on:click={completePomodoro}>complete</button-->
</section>

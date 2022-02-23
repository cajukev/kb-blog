<div class="flare">
  <div class="container horizontal" />
  <div class="container vertical" />
</div>

<style lang="scss">
  .flare {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    & .container {
      &.horizontal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        background-repeat: repeat-x;
        background-image: url("HPattern.svg");
      }
      &.vertical {
        position: absolute;
        left: 0;
        width: 7rem;
        height: 100%;
        background-repeat: repeat-y;

        background-image: url("VPattern.svg");
      }
      & svg {
        width: 5rem;
        height: 5rem;
      }
    }
  }
</style>

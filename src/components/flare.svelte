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

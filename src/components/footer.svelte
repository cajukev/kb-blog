<footer>
  <p>© Kevin Brousseau, 2022</p>
  <p>Châteauguay, Quebec, Canada</p>
  <p>514-550-7051</p>
  <p>kevin.brousseau98@gmail.com</p>
</footer>

<style lang="scss">
  footer{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $mini-font-size;
    padding: 1rem 0 0.25rem $page-ml;
    border-top: 1px solid white;
    & p{
      padding-top: 0.5rem;
    }
    @media (min-width: $breakpoint-4) {
      flex-direction: row;
      justify-content: flex-start;
      padding-top: 0;
      & p{
        padding-top: 0;
        margin-right: 2rem;
      }
    }
  }
</style>
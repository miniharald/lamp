class Page404 {
  render() {
    $('main').html(/*html*/`
      <section class="row">
        <div class="col">
          <h1>Vi hittade inte sidan 😢...</h1>
          <p>Det här är säkert vårt fel! Ibland bygger vi om vår sida - och produkter kan försvinna från vårt sortiment.</p>
          <p>Vill du kolla in <a href="#produkter">nya fräscha produkter</a>?</p>
        </div>
      </section>
    `);
  }
}
<h2 class="right__title">Nous contacter</h2>
<section id="contact">
  <!-- <form id="form" action="" method="get"> -->
  <form id="form" action="" method="post">
    <fieldset>
      <legend>Identité</legend>
      <div class="form-row">
        <label>Je suis</label>
        <div class="input-group">
          <input id="civilite-femme" type="radio" name="civilite" value="2" checked>
          <label for="civilite-femme">une femme /</label>
          <input id="civilite-homme" type="radio" name="civilite" value="1">
          <label for="civilite-homme">un homme</label>
        </div>
      </div>
      <div class="form-row">
        <label for="prenom">Mon prénom est </label>
        <input type="text" id="prenom" placeholder="Prénom" name="prenom" value="Clément">
      </div>
      <div class="form-row">
        <label for="nom">Et mon nom, </label>
        <input type="text" id="nom" placeholder="Nom" name="nom">
      </div>
    </fieldset>
    <fieldset>
      <legend>Message</legend>
      <div class="form-row">
        <label for="email">Répondez-moi via</label>
        <input type="email" id="email" placeholder="Adresse e-mail" name="email" required>
      </div>
      <div class="form-row">
        <label for="message">Je voulais vous dire que</label>
        <textarea id="message" placeholder="Votre message" name="message"></textarea>
      </div>
      <div class="form-row">
        <label for="file">Et vous montrer ça aussi</label>
        <input type="file" id="file" name="fichier">
      </div>
    </fieldset>
    <fieldset>
      <div class="form-row">
        <label for="info">Je certifie la véracité de ces informations.</label>
        <input id="info" type="checkbox" name="info" value="1" required>
      </div>
    </fieldset>
    <button id="submit-form">Envoyer</button>
    <input type="submit" value="Envoyer"> -->
  </form>
</section>
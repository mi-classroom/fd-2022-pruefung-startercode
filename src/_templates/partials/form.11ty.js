exports.html = `
<div>
  <h3>Metadaten zur Abbildung</h3>
  <form data-js-validate="true">
  <div class="form-field">
    <input type="text" name="dateiart" id="dateiart" required>
    <label for="dateiart">Dateiart</label>
  </div>

  <div class="form-field">
    <textarea name="langtext" id="langtext" required></textarea>
    <label for="langtext">Langtext</label>
  </div>

  <div class="form-field">
    <input type="text" name="rechte" id="rechte" required>
    <label for="rechte">Abbildung Rechte</label>
  </div>

  <div class="form-field">
    <input type="text" name="quelle" id="quelle" required>
    <label for="quelle">Abbildung Quelle</label>
  </div>

  <div class="form-field">
    <input type="date" name="datum" id="datum" required>
    <label for="datum">Datum</label>
  </div>

  <div class="form-field">
    <input class="form-field__button" type="reset" value="abbrechen">
    <input class="form-field__button" type="submit" value="speichern">
  </div>

  </form>
</div>
`;
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" id="footerMenu">
            <div class="footer-content">

                <img 
                    src="../img/datalandWhite.png"
                    alt="Logo dataland Disney"
                    class="footer-icon"
                >

                <p class="footer-text">
                    Baista Gomez,  el mejor café </p>

            </div>
        </footer>
        `;
    }
}
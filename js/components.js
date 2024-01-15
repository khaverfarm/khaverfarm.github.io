class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="flex" style="margin: 1px solid yellow";>
                <div class="flex" style="flex-grow: 1; justify-content: space-evenly; align-items: center;">
                    <div class="flex" style="flex-grow: 6; font-size: 50px">
                        <a href="./index.html">
                            Khaver Farm
                        </a>
                    </div>
                    <div class="flex" style="flex-grow: 1; font-size: 25px;">
                        <a href="./posts.html">
                            Posts
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="flex" style="justify-content: space-around;">
                <p>50 Campbell Rd Plainfield, MA 01070</p>
                <p>781-507-4860</p>
                <p>khaverfarm@gmail.com</p>
            </footer>
        `;
    }
}

  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);
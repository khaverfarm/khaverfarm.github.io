class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="flex";>
                <div class="logo flex">
                    <a class="navtext" href="./index.html">
                        Khaver Farm
                    </a>
                </div>
                <div class="navbar-element flex">
                    <a class="navtext" href="./posts.html">
                        Posts
                    </a>
                </div>
            </nav>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="flex">
                <p>50 Campbell Rd Plainfield, MA 01070</p>
                <p>781-507-4860</p>
                <p>khaverfarm@gmail.com</p>
            </footer>
        `;
    }
}

  customElements.define('main-header', Header);
  customElements.define('main-footer', Footer);
# Homepage V2

![HTML Badge](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)

**Homepage V2** is a modern, customizable browser homepage built with HTML, CSS, and JavaScript. The homepage dynamically populates cards for links and icons without requiring a server, allowing it to be run locally without CORS issues.

## Features

- **Dynamic Card Population**: Cards with links and icons are populated dynamically through a separate configuration file, making it easy to customize.
- **No Server Required**: Runs directly from a local file without the need for a server, bypassing common CORS issues.
- **Modern Design**: Uses a sleek, gray design language with easily customizable icons and layout.
  
## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/homepage_v2.git
   cd homepage_v2

2. Setup Links and Icons

- Add your personalized links and icons in `config.js`, which is included in `.gitignore` to keep personal data out of the public repository.
- Example structure in `config.js`:

    ```javascript
    const iconData = [
        {
            icon: "path/to/icon1.svg",
            url: "https://example.com",
            label: "Example"
        },
        {
            icon: "path/to/icon2.svg",
            url: "https://another.com",
            label: "Another Link"
        }
    ];
    ```

3. Run Locally

- Open `index.html` in your browser.
- No server setup is required, and CORS issues are handled seamlessly.

## Customization

- **Icons**: Add or replace icons in `config.js` for each card. You can find icons from sources like [Heroicons](https://heroicons.com/) or [Font Awesome](https://fontawesome.com/).
- **Color and Layout**: Modify `styles.css` to customize the colors, card layout, and fonts.

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and layout
- **JavaScript (ES6)** - Dynamic content population

## License

This project is open-source and available under the MIT License.

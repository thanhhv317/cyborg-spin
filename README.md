# Cyborg Spin Game Auto-Play

This project automates the process of playing the Cyborg game using an Express server. It will use tokens from a configured file and automatically play the spin game every 10 seconds.

## Features

- **Auto Play Spin Game**: Automatically plays the spin game in Cyborg using configured tokens.
- **Configurable Accounts**: Set up account names and tokens in a configuration file.
- **Run with Nodemon**: Supports automatic restarts with `nodemon` during development.

## Requirements

- **Node.js** (>=12.x)
- **npm** (>=6.x)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <project-folder>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. **Configuration**: Set up your account information in the `account.js` file. Add your **account name** and **Bearer token** in this file. The file should look something like this:

    ```javascript
    // account.js
    module.exports = {
      accountName: 'your-account-name',
      token: 'Bearer your-token-here'
    };
    ```

## Running the Code

You can run the code using one of the following methods:

### 1. Run the server with Node.js:
   ```bash
   node index.js

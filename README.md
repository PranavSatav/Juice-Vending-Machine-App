# Fruit Juice Vending Machine

## Features

### Admin Panel
- Log in with the admin password ('123') to access the admin panel.
- Add, edit, or delete fruits from the vending machine inventory.
- View a list of current fruits with their details.

### User Interface
- Browse a selection of fruits and add them to the cart.
- View the selected items in the cart and remove items if needed.
- Proceed to the payment tab and make payment for the selected items.
- Experience a simulated dispensing process after making payment.

## Technologies Used
- **React:** Front-end framework for building user interfaces.
- **Axios:** HTTP client for making requests to the server.
- **React-Tabs:** Library for creating tabbed interfaces in React.
- **CSS:** Styling to enhance the user interface.

## Project Structure
- **src/components:** Contains React components for different parts of the application.
- **src/styles.css:** Stylesheet for styling the application.

## API Endpoints
- `GET /getFruits:` Retrieve the list of fruits from the server.
- `POST /addFruit:` Add a new fruit to the inventory.
- `DELETE /deleteFruit/:id:` Delete a fruit from the inventory by its ID.
- `PUT /updateFruit/:id:` Update the details of a fruit by its ID.

## How to Run

### Prerequisites
- Node.js installed on your machine.

### Steps
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd fruit-vending-machine`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and go to [http://localhost:3000](http://localhost:3000)
6. Explore the fruit vending machine application!

### Steps Additional (in project directory run this commands)
1. npm install
2. npm isntall mongoose
3. npm install axios
4. npm install react-tabs
5. npm install express
6. npm install cors

### Steps Additional (in project directory/src run this commands)
1. npm install
2. npm install axios
3. npm install cors
4. npm install react-tabs

Live Demo - https://juice-vending-machine-app.vercel.app/ 
But it wont show any products because server.js requires node, and we cant host it for free, so run the server.js using "node server.js" command
and then go to the link...and see working project..

## Contributing
Feel free to contribute to the project by opening issues or creating pull requests. Your feedback and contributions are highly appreciated!

## License
This project is licensed under the MIT License.

Happy fruit shopping! 🍎🍌🍇

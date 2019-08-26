import Users from '../controllers/user';
import Books from '../controllers/book';

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the bookStore API!',
}));

app.get('/api/books', Books.list); // API route for user to get all books in the database

app.post('/api/users', Users.signUp); // API route for user to signup
app.post('/api/users/:userId/books', Books.create); // API route for user to create a book

app.put('/api/books/:bookId', Books.modify); // API route for user to edit a book
};
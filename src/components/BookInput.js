import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/books/books';

const categories = ['Choose a Category', 'Action', 'Action and Adventure', 'Drama', 'Mystery', 'Children Books', 'Romance', 'Comedy', 'Finances', 'Accounting', 'Novel', 'Horror', 'Science', 'Health', 'History', 'Business'];

const BookInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const onBookTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const book = {
    item_id: uuidv4(),
    title,
    category,
    author,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(postBooks(book));
      setTitle('');
      setAuthor('');
      setCategory(categories[0]);
      e.target.reset();
    }
  };

  return (
    <section className="form-section">
      <h2>Add New Book</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          name="title"
          onChange={onBookTitleChange}
          required
        />
        <input
          type="text"
          placeholder="Book Author"
          value={author}
          name="title"
          onChange={onChangeAuthor}
          required
        />
        <select name="category" onChange={(category) => setCategory(category.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </section>
  );
};

export default BookInput;

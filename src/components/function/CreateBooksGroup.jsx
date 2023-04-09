import React, { useState } from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { createBooksGroup } from '../../graphql/mutations';

const CreateBooksGroup = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const file = image;
      const filename = file.name;
      const stored = await Storage.put(filename, file, {
        contentType: file.type,
        metadata: {
          caption: 'A caption'
        }
      });
      console.log('Stored image: ', stored);

      const booksGroupDetails = {
        title,
        image: stored.key
      };
      const newBooksGroup = await API.graphql(graphqlOperation(createBooksGroup, { input: booksGroupDetails }));
      console.log('Created books group: ', newBooksGroup);
    } catch (error) {
      console.error('Error creating books group: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Create Books Group</button>
      </form>
    </div>
  );
};

export default CreateBooksGroup;

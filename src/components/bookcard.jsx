import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.details}>
        <h3 style={styles.title}>{name}</h3>
        <p style={styles.info}>Genre: {genre}</p>
        <p style={styles.info}>Author: {author}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  details: {
    marginTop: '12px',
  },
  title: {
    fontSize: '20px',
    margin: '0 0 8px 0',
  },
  info: {
    margin: '4px 0',
    color: '#666',
  },
};

export default BookCard;
import React, { useState } from 'react';
import InputField from './InputField';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMovie({
            title: movieTitle,
            year: movieYear,
        });
        resetForm();
    };

    return (
        <form onSubmit={onSubmit}>
            <InputField type="text" value={movieTitle} placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)} />
            <InputField type="text" value={movieYear} placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)} />
            <button type="submit">영화추가</button>
        </form>
    )
};

export default MovieForm;
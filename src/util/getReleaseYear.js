const getReleaseYear = dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
};

export default getReleaseYear;

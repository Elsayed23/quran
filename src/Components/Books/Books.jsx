import React from 'react';
import axios from 'axios';
import PageTitle from '../PageTitle';
import SecTitle from '../SecTitle';
import Book from './Book';
import Loading from '../Loading';

const Books = () => {

    const [books, setBooks] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    async function getBooks() {
        const { data } = await axios.get('https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/books/ar/ar/1/25/json')
        setBooks(data.data)
        setLoading(false)
    }

    React.useEffect(() => {
        getBooks()
    }, [])

    const book = books?.map((book, idx) => {
        return (
            <Book key={idx} {...book} />
        )
    })

    return (
        loading
            ?
            <Loading />
            :
            <>
                <PageTitle title='كتب' />
                <div className="container mx-auto py-8 px-4 md:px-16">
                    <SecTitle title='كتب' />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
                        {book}
                    </div>
                </div>

            </>
    )
}

export default Books;
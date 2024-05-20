import React from 'react';
import axios from 'axios';
import SEO from '../../components/other/SEO';
import SecTitle from '../../components/other/SecTitle';
import Book from './Book';
import Loading from '../../components/other/Loading';
import ProgressBar from '../../components/other/ProgressBar';
// import bgImage from '../../assets/images/Islamic-Library.jpg'
import { booksApi } from '../../api';

const Books = () => {

    const [books, setBooks] = React.useState(null)
    const [loading, setLoading] = React.useState(true);

    const getBooks = async () => {
        const { data: { data } } = await axios.get(booksApi)
        setBooks(data)
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
                <SEO title='كتب إسلامية' desc='Explore a rich collection of religious books encompassing Islamic teachings and wisdom. Our Religious Books page is a treasure trove of knowledge, covering various aspects of Islam. Immerse yourself in literature that nurtures your spiritual growth.' />
                <ProgressBar />
                <div className="container mx-auto py-14 px-4">
                    <SecTitle title='كُتب إسلامية' />
                    <div className="grid grid-cols-1 gap-y-6">
                        {book}
                    </div>
                </div>

            </>
    )
}

export default Books;